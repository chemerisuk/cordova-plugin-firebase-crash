package by.chemerisuk.cordova.firebase;

import android.util.Log;

import by.chemerisuk.cordova.support.CordovaMethod;
import by.chemerisuk.cordova.support.ExecutionThread;
import by.chemerisuk.cordova.support.ReflectiveCordovaPlugin;

import com.google.firebase.crashlytics.FirebaseCrashlytics;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaArgs;
import org.json.JSONException;


public class FirebaseCrashPlugin extends ReflectiveCordovaPlugin {
    private static final String TAG = "FirebaseCrashPlugin";

    private FirebaseCrashlytics firebaseCrashlytics;

    @Override
    protected void pluginInitialize() {
        Log.d(TAG, "Starting Firebase Crashlytics plugin");

        firebaseCrashlytics = FirebaseCrashlytics.getInstance();
    }

    @CordovaMethod(ExecutionThread.WORKER)
    private void log(CordovaArgs args, CallbackContext callbackContext) throws JSONException {
        String message = args.getString(0);
        firebaseCrashlytics.log(message);
        callbackContext.success();
    }

    @CordovaMethod(ExecutionThread.UI)
    private void logError(CordovaArgs args, CallbackContext callbackContext) throws JSONException {
        String message = args.getString(0);
        firebaseCrashlytics.recordException(new Exception(message));
        callbackContext.success();
    }

    @CordovaMethod(ExecutionThread.UI)
    private void setUserId(CordovaArgs args, CallbackContext callbackContext) throws JSONException {
        String userId = args.getString(0);
        firebaseCrashlytics.setUserId(userId);
        callbackContext.success();
    }

    @CordovaMethod
    private void setEnabled(CordovaArgs args, CallbackContext callbackContext) throws JSONException {
        boolean enabled = args.getBoolean(0);
        firebaseCrashlytics.setCrashlyticsCollectionEnabled(enabled);
        callbackContext.success();
    }

    @CordovaMethod(ExecutionThread.UI)
    private void setStringValue(CordovaArgs args, CallbackContext callbackContext) throws JSONException {
        String key = args.getString(0);
        String value = args.getString(1);
        firebaseCrashlytics.setCustomKey(key, value);
        callbackContext.success();
    }

    @CordovaMethod(ExecutionThread.UI)
    private void setNumberValue(CordovaArgs args, CallbackContext callbackContext) throws JSONException {
        String key = args.getString(0);
        Object value = args.get(1);
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
    private void setBooleanValue(CordovaArgs args, CallbackContext callbackContext) throws JSONException {
        String key = args.getString(0);
        boolean value = args.getBoolean(1);
        firebaseCrashlytics.setCustomKey(key, value);
        callbackContext.success();
    }

}
