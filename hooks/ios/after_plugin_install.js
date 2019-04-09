const fs = require("fs");
const helper = require("./helper");

module.exports = function(context) {
    const comment = helper.BUILD_PHASE_COMMENT;
    const xcode = context.requireCordovaModule("xcode");
    const xcodeProjectPath = helper.getXcodeProjectPath(context);
    const xcodeProject = xcode.project(xcodeProjectPath);

    xcodeProject.parseSync();

    // Only add if not already there yet

    const buildPhase = xcodeProject.pbxItemByComment(comment, "PBXShellScriptBuildPhase");

    if (!buildPhase) {
        xcodeProject.addBuildPhase([], "PBXShellScriptBuildPhase", comment, null, {
            shellPath: "/bin/sh",
            shellScript: "${PODS_ROOT}/Fabric/run",
            inputPaths: ['"$(BUILT_PRODUCTS_DIR)/$(INFOPLIST_PATH)"']
        });

        fs.writeFileSync(xcodeProjectPath, xcodeProject.writeSync());
    }
};
