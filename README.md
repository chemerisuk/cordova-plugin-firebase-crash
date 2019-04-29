# cordova-plugin-firebase-crash<br>[![NPM version][npm-version]][npm-url] [![NPM downloads][npm-downloads]][npm-url]
> Cordova plugin for [Firebase Crashlytics](https://firebase.google.com/docs/crashlytics/)

## Installation

    cordova plugin add cordova-plugin-firebase-crash --save

Use variable `FIREBASE_CORE_VERSION` to override dependency version on Android.

## Supported Platforms

- iOS
- Android

[npm-url]: https://www.npmjs.com/package/cordova-plugin-firebase-crash
[npm-version]: https://img.shields.io/npm/v/cordova-plugin-firebase-crash.svg
[npm-downloads]: https://img.shields.io/npm/dm/cordova-plugin-firebase-crash.svg

## Methods
Every method returns a promise that fulfills when a call was successful.

### log(_message_)
Add logging that will be sent with your crash data in case of app crash. Compare [Firebase documentation](https://firebase.google.com/docs/crashlytics/customize-crash-reports?authuser=0#add_custom_log_messages).
```js
cordova.plugins.firebase.crashlytics.log("my custom log message");
```

### logError(_message_)
Log non-fatal exceptions in addition to automatically reported app crashes. Compare [Firebase documentation](https://firebase.google.com/docs/crashlytics/customize-crash-reports?authuser=0#log_non-fatal_exceptions).
```js
cordova.plugins.firebase.crashlytics.logError("my non-fatal exception message");
```

### setUserId(_userId_)
Sets the user identifier property for crashlytics reporting. Compare [Firebase documentation](https://firebase.google.com/docs/crashlytics/customize-crash-reports?authuser=0#set_user_identifiers).
```js
cordova.plugins.firebase.crashlytics.setUserId("12345");
```
