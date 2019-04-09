const fs = require("fs");
const xcode = require("xcode");
const helper = require("./helper");

module.exports = function(context) {
    const comment = helper.BUILD_PHASE_COMMENT;
    const xcodeProjectPath = helper.getXcodeProjectPath(context);
    const xcodeProject = xcode.project(xcodeProjectPath);

    xcodeProject.parseSync();

    // First, we want to delete the build phase block itself.

    const buildPhases = xcodeProject.hash.project.objects.PBXShellScriptBuildPhase;

    for (var buildPhaseId in buildPhases) {
        const buildPhase = xcodeProject.hash.project.objects.PBXShellScriptBuildPhase[buildPhaseId];
        var shouldDelete = false;

        if (buildPhaseId.indexOf("_comment") === -1) {
            // Dealing with a build phase block.

            // If the name of this block matches ours, then we want to delete it.
            shouldDelete = buildPhase.name && buildPhase.name.indexOf(comment) !== -1;
        } else {
            // Dealing with a comment block.

            // If this is a comment block that matches ours, then we want to delete it.
            shouldDelete = buildPhaseId === comment;
        }

        if (shouldDelete) {
            delete buildPhases[buildPhaseId];
        }
    }

    // Second, we want to delete the native target reference to the block.

    const nativeTargets = xcodeProject.hash.project.objects.PBXNativeTarget;

    for (var nativeTargetId in nativeTargets) {
        // Skip over the comment blocks.
        if (nativeTargetId.indexOf("_comment") === -1) {
            const nativeTarget = nativeTargets[nativeTargetId];
            // We remove the reference to the block by filtering out the the ones that match.
            nativeTarget.buildPhases = nativeTarget.buildPhases.filter(function(buildPhase) {
                return buildPhase.comment !== comment;
            });
        }
    }

    // Finally, write the .pbxproj back out to disk.
    fs.writeFileSync(xcodeProjectPath, xcodeProject.writeSync());
};
