# Cordova plugin for [Firebase Crashlytics](https://firebase.google.com/docs/crashlytics/)
[![NPM version][npm-version]][npm-url] [![NPM downloads][npm-downloads]][npm-url] [![Twitter][twitter-follow]][twitter-url]

| [![Donate](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)][donate-url] | Your help is appreciated. Create a PR, submit a bug or just grab me :beer: |
|-|-|

## Index

<!-- MarkdownTOC levels="2" autolink="true" -->

- [Supported Platforms](#supported-platforms)
- [Installation](#installation)
- [Disable data collection](#disable-data-collection)
- [Methods](#methods)

<!-- /MarkdownTOC -->

## Supported Platforms

- iOS
- Android

## Installation

    $ cordova plugin add cordova-plugin-firebase-crash

If you get an error about CocoaPods being unable to find compatible versions, run
    
    $ pod repo update

Use variables `IOS_FIREBASE_CRASHLYTICS_VERSION`  `ANDROID_FIREBASE_CRASHLYTICS_VERSION` to override dependency versions for Firebase SDKs.

## Disable data collection
In some cases, you may wish to temporarily or permanently disable collection of crash data. You can set the value of variable `FIREBASE_CRASHLYTICS_COLLECTION_ENABLED` to `false` to prevent collecting any user data:

    $ cordova plugin add cordova-plugin-firebase-crash --variable FIREBASE_CRASHLYTICS_COLLECTION_ENABLED=false

Later you can re-enable crashlytics (for instance after getting end-user consent) using method [setEnabled](#setenabledenabled).

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

### setEnabled(_enabled_)
Sets whether crashlytics collection is enabled for this app on this device.
```js
cordova.plugins.firebase.crashlytics.setEnabled(false);
```

[npm-url]: https://www.npmjs.com/package/cordova-plugin-firebase-crash
[npm-version]: https://img.shields.io/npm/v/cordova-plugin-firebase-crash.svg
[npm-downloads]: https://img.shields.io/npm/dm/cordova-plugin-firebase-crash.svg
[twitter-url]: https://twitter.com/chemerisuk
[twitter-follow]: https://img.shields.io/twitter/follow/chemerisuk.svg?style=social&label=Follow%20me
[donate-url]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=JSR75ZMVB5NRU&source=url