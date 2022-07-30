var PLUGIN_NAME = "FirebaseCrash";
// @ts-ignore
var exec = require("cordova/exec");

module.exports = {
    log:
    /**
     *
     * Add logging that will be sent with your crash data in case of app crash.
     * @param {string} message Log message
     * @returns {Promise<void>} Callback when operation is completed
     *
     * @see https://firebase.google.com/docs/crashlytics/customize-crash-reports?authuser=0#add_custom_log_messages
     *
     * @example
     * cordova.plugins.firebase.crashlytics.log("my custom log message");
     */
    function(message) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "log", [message]);
        });
    },
    logError:
    /**
     *
     * Log non-fatal exceptions in addition to automatically reported app crashes.
     * @param {string} message Log message
     * @returns {Promise<void>} Callback when operation is completed
     *
     * @see https://firebase.google.com/docs/crashlytics/customize-crash-reports?authuser=0#log_non-fatal_exceptions
     *
     * @example
     * cordova.plugins.firebase.crashlytics.logError("my non-fatal exception message");
     */
    function(message) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "logError", [message]);
        });
    },
    setUserId:
    /**
     *
     * Sets the user identifier property for crashlytics reporting.
     * @param {string} userId User's indentifier string
     * @returns {Promise<void>} Callback when operation is completed
     *
     * @see https://firebase.google.com/docs/crashlytics/customize-crash-reports?authuser=0#set_user_identifiers
     *
     * @example
     * cordova.plugins.firebase.crashlytics.setUserId("12345");
     */
    function(userId) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "setUserId", [userId]);
        });
    },
    setEnabled:
    /**
     *
     * Sets whether crashlytics collection is enabled for this app on this device.
     * @param {boolean} enabled Flag that specifies new state
     * @returns {Promise<void>} Callback when operation is completed
     *
     * @example
     * cordova.plugins.firebase.crashlytics.setEnabled(false);
     */
    function(enabled) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "setEnabled", [enabled]);
        });
    },
    setCustomKey:
    /**
     *
     * Add custom key/value pairs to crashlytics report.
     * @param {string} key Name of the custom key
     * @param {string|number|boolean} value Value of the custom key
     * @returns {Promise<void>} Callback when operation is completed
     *
     * @see https://firebase.google.com/docs/crashlytics/customize-crash-reports?platform=android
     *
     * @example
     * cordova.plugins.firebase.crashlytics.setCustomKey("my-string-key", "test value");
     * cordova.plugins.firebase.crashlytics.setCustomKey("my-number-key", 123);
     * cordova.plugins.firebase.crashlytics.setCustomKey("my-boolean-key", true);
     */
    function(key, value) {
        return new Promise(function(resolve, reject) {
            if (typeof key !== "string") {
                return reject(new TypeError("Custom key must be a string"));
            }
            if (typeof value !== "string" && typeof value !== "number" && typeof value !== "boolean") {
                return reject(new TypeError("Custom value must be a string/number/boolean"));
            } else if(typeof value === "string") {
                exec(resolve, reject, PLUGIN_NAME, "setStringValue", [key, value]);
            } else if(typeof value === "number") {
                exec(resolve, reject, PLUGIN_NAME, "setNumberValue", [key, value]);
            } else if(typeof value === "boolean") {
                exec(resolve, reject, PLUGIN_NAME, "setBooleanValue", [key, value]);
            }        
        });
    }
};
