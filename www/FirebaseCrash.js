var exec = require("cordova/exec");
var PLUGIN_NAME = "FirebaseCrash";

module.exports = {
    report: function(message, success, error) {
        exec(success, error, PLUGIN_NAME, "report", [message]);
    }
};
