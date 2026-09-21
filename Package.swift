// swift-tools-version:5.9
import PackageDescription

let package = Package(
    name: "cordova-plugin-firebase-crashlytics",
    platforms: [.iOS(.v15)],
    products: [
        .library(name: "cordova-plugin-firebase-crashlytics", targets: ["cordova-plugin-firebase-crashlytics"])
    ],
    dependencies: [
        .package(url: "https://github.com/apache/cordova-ios.git", branch: "master"),
        .package(url: "https://github.com/firebase/firebase-ios-sdk.git", exact: "$IOS_FIREBASE_POD_VERSION")
    ],
    targets: [
        .target(
            name: "cordova-plugin-firebase-crashlytics",
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
