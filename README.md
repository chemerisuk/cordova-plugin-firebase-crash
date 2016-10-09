# cordova-plugin-firebase-crash
> Cordova plugin for [Firebase Crash](https://firebase.google.com/docs/crash/)


## Installation

    cordova plugin add cordova-plugin-firebase-crash --save

## Supported Platforms

- iOS
- Android

## Methods

### log(_message_)
Logs a message that will appear in a subsequent crash report.
```js
window.cordova.plugins.firebase.crash.log("BOOM!");
```
