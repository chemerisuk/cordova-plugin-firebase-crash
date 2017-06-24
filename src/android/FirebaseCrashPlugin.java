package by.chemerisuk.cordova.firebase;

import com.google.firebase.crash.FirebaseCrash;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;


public class FirebaseCrashPlugin extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("report")) {
            report(callbackContext, args.getString(0));

            return true;
        } else if ("setEnabled".equals(action)) {
            setEnabled(callbackContext, args.getBoolean(0));

            return true;
        }

        return false;
    }

    private void report(final CallbackContext callbackContext, final String message) throws JSONException {
        FirebaseCrash.log(message);

        callbackContext.success();
    }

    private void setEnabled(CallbackContext callbackContext, boolean enabled) {
        FirebaseCrash.setCrashCollectionEnabled(enabled);

        callbackContext.success();
    }
}
