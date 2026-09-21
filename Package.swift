// swift-tools-version:5.9
import PackageDescription

let package = Package(
    name: "cordova-plugin-firebase-crash",
    platforms: [.iOS(.v15)],
    products: [
        .library(name: "cordova-plugin-firebase-crash", targets: ["cordova-plugin-firebase-crash"])
    ],
    dependencies: [
        .package(url: "https://github.com/apache/cordova-ios.git", branch: "master"),
        .package(url: "https://github.com/firebase/firebase-ios-sdk.git", exact: "$IOS_FIREBASE_SDK_VERSION")
    ],
    targets: [
        .target(
            name: "cordova-plugin-firebase-crash",
            dependencies: [
                .product(name: "Cordova", package: "cordova-ios"),
                .product(name: "FirebaseCrashlytics", package: "firebase-ios-sdk")
            ],
            path: "src/ios",
            resources: [],
            publicHeadersPath: "."
        )
    ]
)
