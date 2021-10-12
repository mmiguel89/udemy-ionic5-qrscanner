# Udemy-Ionic5 - QRScanner
- Course: https://www.udemy.com/course/ionic-ios-android-pwa-appstore-playstore-push/
- Documentation: https://github.com/mmiguel89/udemy-ionic5-docs
- Lecture: Sección 11: Aplicación lectora de códigos de barra y QR

## Prerequisites (just android, IOS deloy is not considered)
- Node 16.8.0 (nvm use 16.8.0)
- NPM 7.21.1 (automatic)
- Ionic Cli 6.17.1
- python 2.7.18
- Cordova 10.0.0 (API level 30. Minimal for actual apb bundle on Google Play Store)
- Gradle 6.4
- Android Studio with emulator 3.6.3
- ANDROID_SDK_HOME to Android Studio SDK
- Run sdkmanager --licenses and accept licences (ANDROID_SDK_HOME/tools/bin)
- Dev mode on emulator or USB connected device (System > About device > Click several times to dev mode)

## Steps just for serve
1) rm node_modules
2) rm package-lock.json
3) npm install
4) ionic serve

## Step for run with capcitor for android
1) ionic build
2) ionic capacitor add android
3) ionic capacitor copy android
4) Open Android Studio > Open > Run

## Live reload for android
ionic capacitor run android -l --host=192.168.1.104

## ISSUE
Plugin not working: "cordova-plugin-email-composer": "^0.9.2"

## PWA
1) ng add @angular/pwa
2) ionic build --prod --service-worker
3) npm install -g firebase-tools
4) Create fire project google firebase console
5) Hosting => Folow next instructions
6) firebase login --reauth
7) firebase init
8) firebase deploy

udemy-ionic5-qrscanner.firebaseapp.com

## Icons
https://app-manifest.firebaseapp.com/

# QR generator
https://www.qrcode.es/es/generador-qr-code/

# Map box
mmiguel89
mmiguel89@gmail.com
mi...