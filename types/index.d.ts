interface CordovaPlugins {
    firebase: FirebasePlugins;
}

interface FirebasePlugins {
    crashlytics: typeof import("./FirebaseCrash");
}
