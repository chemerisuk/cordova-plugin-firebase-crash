#import <Cordova/CDV.h>

@interface FirebaseCrashPlugin : CDVPlugin

- (void)report:(CDVInvokedUrlCommand*)command;
- (void)setEnabled:(CDVInvokedUrlCommand*)command;

@end
