# cordova-plugin-firebase-crash<br>[![NPM version][npm-version]][npm-url] [![NPM downloads][npm-downloads]][npm-url]
> Cordova plugin for [Firebase Crash](https://firebase.google.com/docs/crash/)

## Installation

    cordova plugin add cordova-plugin-firebase-crash --save

## Supported Platforms

- iOS
- Android

## Methods
In addition to automatic reports, you can log custom events to help capture the steps leading up to a crash.

### report(_message_)
Logs a message that will appear in a subsequent crash report.
```js
window.cordova.plugins.firebase.crash.report("BOOM!");
```

[npm-url]: https://www.npmjs.com/package/cordova-plugin-firebase-crash
[npm-version]: https://img.shields.io/npm/v/cordova-plugin-firebase-crash.svg
[npm-downloads]: https://img.shields.io/npm/dt/cordova-plugin-firebase-crash.svg
