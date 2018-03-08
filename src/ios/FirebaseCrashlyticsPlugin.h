#import <Cordova/CDV.h>

@interface FirebaseCrashlyticsPlugin : CDVPlugin

- (void)report:(CDVInvokedUrlCommand*)command;
- (void)setEnabled:(CDVInvokedUrlCommand*)command;

@end
