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
export function log(message: string): Promise<void>;
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
export function logError(message: string): Promise<void>;
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
export function setUserId(userId: string): Promise<void>;
/**
 *
 * Sets whether crashlytics collection is enabled for this app on this device.
 * @param {boolean} enabled Flag that specifies new state
 * @returns {Promise<void>} Callback when operation is completed
 *
 * @example
 * cordova.plugins.firebase.crashlytics.setEnabled(false);
 */
export function setEnabled(enabled: boolean): Promise<void>;
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
export function setCustomKey(key: string, value: string | number | boolean): Promise<void>;
