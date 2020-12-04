# The React Native way 🤘

This repo is a great way to get started with a React Native project. React Native is the perfect framework to use when you need to build both Android and IOS applications with a single code base. 

When using this project please make sure you follow the ways of work to ensure all derivative projects are aligned.

## Installation 🛠

1.  Ensure that you have node.js installed before starting => 
    https://nodejs.org/en/
    
2.  Then follow the React Native CLI setup (Choose React Native CLI Quickstart and NOT EXPO CLI Quickstart) => 
    https://reactnative.dev/docs/environment-setup

3.  Once you have the React Native CLI installed you are ready to rock it, so in a new project folder run the following command to clone this repo => 
```bash
git clone https://github.com/IOCOTech/React-Native-Framework.git
```

After you have cloned the repo open the android folder in Android Studio or (the root folder in VS Code) and run the following command before doing a build => 
```bash
npm install
```

Android Studio will work right off the bat whereas with VS Code you might need to do some extra permission changes which is worth it because we love VS code. 
If you want to build for IOS you have to dowload Xcode and run the project from there.

Finally startup an emulator and build the project in Android Studio.

(Note) if you are using VS code you can run the following commands in sequence.
if you are having permission issues refer to the issue section below the commands.
```bash
npm install
```
```bash
react-native run-android
```

## Issues with permission 🤒

Sometimes things don't always work out according to plan, oops!
Here are some articles that will help resolve any issues found regarding the setup.

Note: the best way to resolve issues is sometimes to Google them.

1. Permissions 

https://stackoverflow.com/questions/60276556/how-can-i-solve-permission-denied-in-react-native-project

2. Emulator

https://stackoverflow.com/questions/38835931/react-native-adb-reverse-enoent

3. ANDROID_SDK_ROOT

https://stackoverflow.com/questions/27620262/sdk-location-not-found-define-location-with-sdk-dir-in-the-local-properties-fil

## Dev Standards

React Native is an empty box at first so here are guidelines to ensure that all developers working with this repo adhere to the same coding standards. First let's have a look at some helpful libraries that are used for navigation and UI components.

### Navigation library

https://reactnavigation.org/docs/getting-started

### UI component library

https://reactnativeelements.com

## UI global styles

This section will be available soon.

## Contributing

Contributing to this documentation is always appreciated so if you found something useful to add, create a pull request for the readme file.
Code pull requests are welcome for major changes, please open an issue first to discuss what you would like to change.


## Questions and Answers

If you have any questions regarding this starter pack or guidelines please contact Daniel at daniel.botha1@eoh.com

