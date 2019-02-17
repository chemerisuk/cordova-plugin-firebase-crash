# cordova-plugin-firebase-crash<br>[![NPM version][npm-version]][npm-url] [![NPM downloads][npm-downloads]][npm-url]
> Cordova plugin for [Firebase Crashlytics](https://firebase.google.com/docs/crashlytics/)

## Installation

    cordova plugin add cordova-plugin-firebase-crash --save

## Supported Platforms

- iOS
- Android

## Methods
While the framework allow to trigger crashes manually - this is not the recommended way. It's possible to loose error messages before the framework was started. Therefore this plugin adds support for only automatic initialization.

## Add the Crashlytics run script
On iOS you need to add extra script to upload dSYM files into your Firebase Console, so your stack traces won't be obfuscated. Add it to your project's build phases:
1. Open your project in Xcode, and select its project file in the Navigator.
2. Select your main build target from the __Select a project or target__ dropdown.
3. Open the target's __Build Phases__ tab.
4. Click __+ Add a new build phase__, and select __New Run Script Phase__.
5. Add the following line to the __Type a script...__ text box:
```
"${PODS_ROOT}/Fabric/run"
```
It's recommended to enable __Run script only when installing__, so your script will upload dSYM files only after archiving an app.

6. __Xcode 10 only__: Add your app's built `Info.plist` location to the Build Phase's __Input Files__ field:
```
$(BUILT_PRODUCTS_DIR)/$(INFOPLIST_PATH)
```

[npm-url]: https://www.npmjs.com/package/cordova-plugin-firebase-crash
[npm-version]: https://img.shields.io/npm/v/cordova-plugin-firebase-crash.svg
[npm-downloads]: https://img.shields.io/npm/dm/cordova-plugin-firebase-crash.svg
