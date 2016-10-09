var exec = require("cordova/exec");
var PLUGIN_NAME = "FirebaseCrashPlugin";

module.exports = {
    log: function(message, success, error) {
        exec(success, error, PLUGIN_NAME, "log", [message]);
    }
};
