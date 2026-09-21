const path = require("path");
const EventEmitter = require('node:events');
const cordova_ios = require('cordova-ios');

module.exports = {
    BUILD_PHASE_COMMENT: "Crashlytics",

    getXcodeProjectPath: function(context) {
        const projectRoot = context.opts.projectRoot;
        const platformPath = path.join(projectRoot, 'platforms', 'ios');
        const iosProject = new cordova_ios('ios', platformPath, new EventEmitter());
        return iosProject.locations.pbxproj;
    }
};
