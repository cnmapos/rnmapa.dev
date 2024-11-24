# Prerequisites
- Mapbox secret token: For downloading Mapbox dependencies
- Mapbox public token: For accessing Mapbox resources

# INSTALLATION

NPM
```
npm install @rnmapbox/maps react-native-mapa --save
```
YARN
```
yarn add @rnmapbox/maps react-native-mapa --save
```

## Environment Configuration

#### iOS
1. Open configuration file using `vi ~/.netrc`;
2. Add authentication content for downloading Mapbox dependencies:
```
machine api.mapbox.com
login mapbox
password sk.XXX
```
#### Android
1. Open configuration file using `vi ~/.gradle/gradle.properties`;
2. Add authentication content for downloading Mapbox dependencies:
```
MAPBOX_DOWNLOADS_TOKEN=sk.XXX
```

## BUILD
```
# iOS
cd ios && pod install
npm run ios

# Android
npm run android

```

## PERMISSIONS
#### iOS
To use the Location component for positioning functionality, add location permissions to info.plist:
```
<key>MGLMapboxAccessToken</key>
<string>sk.XXX</string>
```
#### Android
To use the Location component for positioning functionality, add location permissions to `android/app/src/main/AndroidManifest.xml`:
```
<manifest ... >
  <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
</manifest>
```