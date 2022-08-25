# Cordova plugin for [Firebase Crashlytics](https://firebase.google.com/docs/crashlytics/)
[![NPM version][npm-version]][npm-url] [![NPM downloads][npm-downloads]][npm-url] [![NPM total downloads][npm-total-downloads]][npm-url] [![PayPal donate](https://img.shields.io/badge/paypal-donate-ff69b4?logo=paypal)][donate-url] [![Twitter][twitter-follow]][twitter-url]

| [![Donate](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)][donate-url] | Your help is appreciated. Create a PR, submit a bug or just grab me :beer: |
|-|-|

[npm-url]: https://www.npmjs.com/package/cordova-plugin-firebase-crash
[npm-version]: https://img.shields.io/npm/v/cordova-plugin-firebase-crash.svg
[npm-downloads]: https://img.shields.io/npm/dm/cordova-plugin-firebase-crash.svg
[npm-total-downloads]: https://img.shields.io/npm/dt/cordova-plugin-firebase-crash.svg?label=total+downloads
[twitter-url]: https://twitter.com/chemerisuk
[twitter-follow]: https://img.shields.io/twitter/follow/chemerisuk.svg?style=social&label=Follow%20me
[donate-url]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=JSR75ZMVB5NRU&source=url

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

Use variables `IOS_FIREBASE_POD_VERSION`  `ANDROID_FIREBASE_BOM_VERSION` to override dependency versions for Firebase SDKs:

    $ cordova plugin add cordova-plugin-firebase-crash \
        --variable IOS_FIREBASE_POD_VERSION="9.3.0" \
        --variable ANDROID_FIREBASE_BOM_VERSION="30.3.1"

## Disable data collection
In some cases, you may wish to temporarily or permanently disable collection of crash data. You can set the value of variable `CRASHLYTICS_COLLECTION_ENABLED` to `false` to prevent collecting any user data:

    $ cordova plugin add cordova-plugin-firebase-crash \
        --variable CRASHLYTICS_COLLECTION_ENABLED=false

Later you can re-enable crashlytics (for instance after getting end-user consent) using method [setEnabled](#setenabledenabled).

### Adding required configuration files

Cordova supports `resource-file` tag for easy copying resources files. Firebase SDK requires `google-services.json` on Android and `GoogleService-Info.plist` on iOS platforms.

1. Put `google-services.json` and/or `GoogleService-Info.plist` into the root directory of your Cordova project
2. Add new tag for Android platform

```xml
<platform name="android">
    ...
    <resource-file src="google-services.json" target="app/google-services.json" />
</platform>
...
<platform name="ios">
    ...
    <resource-file src="GoogleService-Info.plist" />
</platform>
```

This way config files will be copied on `cordova prepare` step.

<!-- TypedocGenerated -->

## Functions

### **log**(`message`): `Promise`<`void`\>

Add logging that will be sent with your crash data in case of app crash.

**`See`**

https://firebase.google.com/docs/crashlytics/customize-crash-reports?authuser=0#add_custom_log_messages

**`Example`**

```ts
cordova.plugins.firebase.crashlytics.log("my custom log message");
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | Log message |

#### Returns

`Promise`<`void`\>

Callback when operation is completed

### **logError**(`message`): `Promise`<`void`\>

Log non-fatal exceptions in addition to automatically reported app crashes.

**`See`**

https://firebase.google.com/docs/crashlytics/customize-crash-reports?authuser=0#log_non-fatal_exceptions

**`Example`**

```ts
cordova.plugins.firebase.crashlytics.logError("my non-fatal exception message");
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | Log message |

#### Returns

`Promise`<`void`\>

Callback when operation is completed

### **setCustomKey**(`key`, `value`): `Promise`<`void`\>

Add custom key/value pairs to crashlytics report.

**`See`**

https://firebase.google.com/docs/crashlytics/customize-crash-reports?platform=android

**`Example`**

```ts
cordova.plugins.firebase.crashlytics.setCustomKey("my-string-key", "test value");
cordova.plugins.firebase.crashlytics.setCustomKey("my-number-key", 123);
cordova.plugins.firebase.crashlytics.setCustomKey("my-boolean-key", true);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | Name of the custom key |
| `value` | `string` \| `number` \| `boolean` | Value of the custom key |

#### Returns

`Promise`<`void`\>

Callback when operation is completed

### **setEnabled**(`enabled`): `Promise`<`void`\>

Sets whether crashlytics collection is enabled for this app on this device.

**`Example`**

```ts
cordova.plugins.firebase.crashlytics.setEnabled(false);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enabled` | `boolean` | Flag that specifies new state |

#### Returns

`Promise`<`void`\>

Callback when operation is completed

### **setUserId**(`userId`): `Promise`<`void`\>

Sets the user identifier property for crashlytics reporting.

**`See`**

https://firebase.google.com/docs/crashlytics/customize-crash-reports?authuser=0#set_user_identifiers

**`Example`**

```ts
cordova.plugins.firebase.crashlytics.setUserId("12345");
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User's indentifier string |

#### Returns

`Promise`<`void`\>

Callback when operation is completed
