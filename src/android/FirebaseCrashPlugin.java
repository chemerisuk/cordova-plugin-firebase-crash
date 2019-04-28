package by.chemerisuk.cordova.firebase;

import android.util.Log;

import com.crashlytics.android.Crashlytics;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;


public class FirebaseCrashPlugin extends CordovaPlugin {

    private final String TAG = "FirebaseCrashPlugin";

    @Override
    protected void pluginInitialize() {
        Log.d(TAG, "Starting Firebase Crash plugin");
    }

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("log")) {
            this.log(callbackContext, args.getString(0));
            return true;
        } else if (action.equals("logError")) {
            this.logError(callbackContext, args.getString(0));
            return true;
        } else if(action.equals("setUserId")){
            this.setUserId(callbackContext, args.getString(0));
            return true;
        }

        return false;
    }

    private void log(final CallbackContext callbackContext, final String message) throws JSONException {
        cordova.getThreadPool().execute(new Runnable() {
            public void run() {
                try {
                    Crashlytics.log(message);
                    callbackContext.success();
                } catch (Exception e) {
                    e.printStackTrace();
                    callbackContext.error(e.getMessage());
                }
            }
        });
    }

    private void logError(final CallbackContext callbackContext, final String message) {
        this.cordova.getActivity().runOnUiThread(new Runnable() {
            @Override
            public void run() {
                try {
                    Crashlytics.logException(new Exception(message));
                    callbackContext.success();
                } catch (Exception e) {
                    e.printStackTrace();
                    callbackContext.error(e.getMessage());
                }
            }
        });
    }

    private void setUserId(final CallbackContext callbackContext, final String userId) {
        cordova.getActivity().runOnUiThread(new Runnable() {
            public void run() {
                try {
                    Crashlytics.setUserIdentifier(userId);
                    callbackContext.success();
                } catch (Exception e) {
                    e.printStackTrace();
                    callbackContext.error(e.getMessage());
                }
            }
        });
    }

}
