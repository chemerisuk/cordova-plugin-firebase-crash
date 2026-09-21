const fs = require('fs');
const xcode = require('xcode');
const helper = require('./helper');
const { PluginInfoProvider } = require('cordova-common');
const { isSwiftPackagePlugin } = require('cordova-ios/lib/SwiftPackage');

module.exports = function(context) {
    const opts = context.opts || {};
    const comment = helper.BUILD_PHASE_COMMENT;
    const xcodeProjectPath = helper.getXcodeProjectPath(context);
    const xcodeProject = xcode.project(xcodeProjectPath);

    xcodeProject.parseSync();

    // Only add if not already there yet

    const buildPhase = xcodeProject.pbxItemByComment(comment, 'PBXShellScriptBuildPhase');
    if (buildPhase) return;

    const pluginInfo = new PluginInfoProvider().get(opts.plugin.dir);
    const shellScript = isSwiftPackagePlugin(pluginInfo) ?
       '"${BUILD_DIR%/Build/*}/SourcePackages/checkouts/firebase-ios-sdk/Crashlytics/run"':
       '"${PODS_ROOT}/FirebaseCrashlytics/run"';
    const result = xcodeProject.addBuildPhase([], 'PBXShellScriptBuildPhase', comment, null, {
        shellPath: '/bin/sh',
        inputPaths: ['"$(BUILT_PRODUCTS_DIR)/$(INFOPLIST_PATH)"'],
        shellScript,
    });

    result.buildPhase.runOnlyForDeploymentPostprocessing = 1;

    fs.writeFileSync(xcodeProjectPath, xcodeProject.writeSync());
};
