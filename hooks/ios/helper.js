const path = require("path");

module.exports = {
    BUILD_PHASE_COMMENT: "Crashlytics",

    getXcodeProjectPath: function(context) {
        const ConfigParser = context.requireCordovaModule("cordova-lib").configparser;
        const appName = new ConfigParser("config.xml").name();
        return path.join("platforms", "ios", appName + ".xcodeproj", "project.pbxproj");
    }
};
