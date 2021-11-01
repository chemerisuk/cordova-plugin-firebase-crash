package by.chemerisuk.cordova.firebase;

import android.util.Log;

import by.chemerisuk.cordova.support.CordovaMethod;
import by.chemerisuk.cordova.support.ReflectiveCordovaPlugin;

import com.google.firebase.crashlytics.FirebaseCrashlytics;

import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;


public class FirebaseCrashPlugin extends ReflectiveCordovaPlugin {
    private final String TAG = "FirebaseCrashPlugin";

    private FirebaseCrashlytics firebaseCrashlytics;

    @Override
    protected void pluginInitialize() {
        Log.d(TAG, "Starting Firebase Crashlytics plugin");

        firebaseCrashlytics = FirebaseCrashlytics.getInstance();
    }

    @CordovaMethod(ExecutionThread.WORKER)
    private void log(String message, CallbackContext callbackContext) {
        firebaseCrashlytics.log(message);

        callbackContext.success();
    }

    @CordovaMethod(ExecutionThread.UI)
    private void logError(String message, CallbackContext callbackContext) {
        firebaseCrashlytics.recordException(new Exception(message));

        callbackContext.success();
    }

    @CordovaMethod(ExecutionThread.UI)
    private void setUserId(String userId, CallbackContext callbackContext) {
        firebaseCrashlytics.setUserId(userId);

        callbackContext.success();
    }

    @CordovaMethod
    private void setEnabled(boolean enabled, CallbackContext callbackContext) {
        firebaseCrashlytics.setCrashlyticsCollectionEnabled(enabled);

        callbackContext.success();
    }

    @CordovaMethod(ExecutionThread.UI)
    private void setStringValue(String key, String value, CallbackContext callbackContext) {
        firebaseCrashlytics.setCustomKey(key, value.toString());

        callbackContext.success();
    }

    @CordovaMethod(ExecutionThread.UI)
    private void setNumberValue(String key, Object value, CallbackContext callbackContext) {
        if(value instanceof Integer) {
            firebaseCrashlytics.setCustomKey(key, (Integer) value);
        } else if(value instanceof Long) {
            firebaseCrashlytics.setCustomKey(key, (Long) value);
        } else if(value instanceof Float) {
            firebaseCrashlytics.setCustomKey(key, (Float) value);
        } else if(value instanceof Double) {
            firebaseCrashlytics.setCustomKey(key, (Double) value);
        }

        callbackContext.success();
    }

    @CordovaMethod(ExecutionThread.UI)
    private void setBooleanValue(String key, boolean value, CallbackContext callbackContext) {
        firebaseCrashlytics.setCustomKey(key, value);

        callbackContext.success();
    }

}
