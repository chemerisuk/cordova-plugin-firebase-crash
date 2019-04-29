package by.chemerisuk.cordova.firebase;

import by.chemerisuk.cordova.support.CordovaMethod;
import by.chemerisuk.cordova.support.ReflectiveCordovaPlugin;

import com.crashlytics.android.Crashlytics;

import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;


public class FirebaseCrashPlugin extends ReflectiveCordovaPlugin {
    private final String TAG = "FirebaseCrashPlugin";

    @CordovaMethod(ExecutionThread.WORKER)
    private void log(String message, CallbackContext callbackContext) {
        Crashlytics.log(message);
        callbackContext.success();
    }

    @CordovaMethod(ExecutionThread.UI)
    private void logError(String message, CallbackContext callbackContext) {
        Crashlytics.logException(new Exception(message));
        callbackContext.success();
    }

    @CordovaMethod(ExecutionThread.UI)
    private void setUserId(String userId, CallbackContext callbackContext) {
        Crashlytics.setUserIdentifier(userId);
        callbackContext.success();
    }

}
