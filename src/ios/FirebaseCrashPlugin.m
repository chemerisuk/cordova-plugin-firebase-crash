#import "FirebaseCrashPlugin.h"
@import Firebase;


@implementation FirebaseCrashPlugin

- (void)pluginInitialize {
    if(![FIRApp defaultApp]) {
        [FIRApp configure];
    }
}

- (void)report:(CDVInvokedUrlCommand *)command {
    NSString* message = [command.arguments objectAtIndex:0];

    FIRCrashMessage(message);

    CDVPluginResult *pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end
