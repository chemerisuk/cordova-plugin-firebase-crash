const path = require("path");

module.exports = {
    BUILD_PHASE_COMMENT: "Crashlytics",

    getXcodeProjectPath: function(context) {
        return path.join("platforms", "ios", "App.xcodeproj", "project.pbxproj");
    }
};
