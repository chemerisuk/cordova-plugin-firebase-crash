const fs = require("fs");
const xcode = require("xcode");
const helper = require("./helper");

module.exports = function(context) {
    const comment = helper.BUILD_PHASE_COMMENT;
    const xcodeProjectPath = helper.getXcodeProjectPath(context);
    const xcodeProject = xcode.project(xcodeProjectPath);

    xcodeProject.parseSync();

    // Only add if not already there yet

    const buildPhase = xcodeProject.pbxItemByComment(comment, "PBXShellScriptBuildPhase");

    if (!buildPhase) {
        const result = xcodeProject.addBuildPhase([], "PBXShellScriptBuildPhase", comment, null, {
            shellPath: "/bin/sh",
            shellScript: "\"${PODS_ROOT}/FirebaseCrashlytics/run\"",
            inputPaths: ["\"$(BUILT_PRODUCTS_DIR)/$(INFOPLIST_PATH)\""]
        });

        result.buildPhase.runOnlyForDeploymentPostprocessing = 1;

        fs.writeFileSync(xcodeProjectPath, xcodeProject.writeSync());
    }
};
