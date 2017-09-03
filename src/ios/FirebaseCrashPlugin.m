#import "FirebaseCrashPlugin.h"

@import FirebaseCrash;


@implementation FirebaseCrashPlugin

- (void)report:(CDVInvokedUrlCommand *)command {
    NSString* message = [command.arguments objectAtIndex:0];

    FIRCrashMessage(message);

    CDVPluginResult *pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)setEnabled:(CDVInvokedUrlCommand *)command {
    bool enabled = [[command.arguments objectAtIndex:0] boolValue];

    [FIRCrash sharedInstance].crashCollectionEnabled = enabled;

    CDVPluginResult *pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end
