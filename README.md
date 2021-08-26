# ![App Icon](https://github.com/RavenAcuzar/Baby-Steps/blob/master/resources/android/icon/drawable-xhdpi-icon.png) 
# Baby Steps
#### THIS IS NOT INTENDED FOR PRODUCTION. THE IMAGES AND VIDEOS INCLUDED ARE FOR SAMPLE PURPOSES ONLY.

This app is a sample kids learning mobile application.

## Screenshots
<img src="https://github.com/RavenAcuzar/Baby-Steps/blob/master/src/assets/localhost_8100_(iPhone%206_7_8).png" width="50%"><img src="https://github.com/RavenAcuzar/Baby-Steps/blob/master/src/assets/localhost_8100_(iPhone%206_7_8)%20(1).png" width="50%"><img src="https://github.com/RavenAcuzar/Baby-Steps/blob/master/src/assets/localhost_8100_(iPhone%206_7_8)%20(2).png" width="50%"><img src="https://github.com/RavenAcuzar/Baby-Steps/blob/master/src/assets/localhost_8100_(iPhone%206_7_8)%20(3).png" width="50%">

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Setup the following requirements to your local machine.

- [Node.js](https://nodejs.org/en/)
- [Setup Ionic](https://ionicframework.com/docs/intro/cli)
- [Setup Git](https://docs.github.com/en/get-started/quickstart/set-up-git)
- [IOS Development](https://ionicframework.com/docs/developing/ios)
- [Android Development](https://ionicframework.com/docs/developing/android)

### Initialize

Create ionic starter app.
```
ionic start BabyStepsApp https://github.com/RavenAcuzar/Baby-Steps/
```
Initialize node packages.
```
npm i
```
Run the app.
```
ionic serve
```
To add platform (Android/IOS)
```
ionic cordova platform add android
```
```
ionic cordova platform add ios
```

### Build App

Run the following commands for building the app.
(Android) For generating release apk add `--prod --release`
```
ionic cordova build android
```
(IOS) For generating release apk add `--prod`. Open project in XCode then run build, Archive, then upload to Appstore.
```
ionic cordova build ios
```

## Key Features
- Background Music integrated
- Video sliders with auto-play.
- Animal Cards tap to play sound.

## Built with

* Ionic 3 (Ionic-Angular Framework)
* Typescript
* HTML, Css/Scss

## Authors and Contributors

* **Rico Raven Acuzar** - [linkedin.com/in/rico-raven/](https://www.linkedin.com/in/rico-raven/)
