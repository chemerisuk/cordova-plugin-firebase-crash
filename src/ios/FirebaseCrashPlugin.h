#import <Cordova/CDV.h>

@interface FirebaseCrashPlugin : CDVPlugin

- (void)log:(CDVInvokedUrlCommand*)command;
- (void)logError:(CDVInvokedUrlCommand*)command;
- (void)setUserId:(CDVInvokedUrlCommand*)command;
- (void)setEnabled:(CDVInvokedUrlCommand*)command;

@end
