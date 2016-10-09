package by.chemerisuk.cordova.firebase;

import com.google.firebase.crash.FirebaseCrash;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;


public class FirebaseCrashPlugin extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("log")) {
            log(callbackContext, args.getString(0));

            return true;
        }

        return false;
    }

    private void log(final CallbackContext callbackContext, final String message) throws JSONException {
        FirebaseCrash.log(message);

        callbackContext.success();
    }
}
