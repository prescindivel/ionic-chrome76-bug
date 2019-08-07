#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const nodeModulesRoot = path.join(__dirname, '../node_modules');
const platformRoot = path.join(__dirname, '../platforms/android');

const typeormPlugin = path.join(nodeModulesRoot, 'typeorm/connection/Connection.d.ts');
const queryStringPlugin = path.join(nodeModulesRoot, 'query-string/index.d.ts');
const qrScannerGradle = path.join(platformRoot, 'cordova-plugin-qrscanner/app-qrscanner.gradle');
const iBeaconGradle = path.join(platformRoot, 'com.unarin.cordova.beacon/app-cordova-plugin-ibeacon.gradle');

function replace(file, text1, text2, success, error) {
  return new Promise(resolve => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) {
        console.error(error);
        return console.error(err);
      }

      data = data.split(text1).join(text2);

      fs.writeFile(file, data, 'utf-8', err => {
        if (err) throw err;
        resolve(console.log(success));
      });
    });
  })
}

async function replaceAll() {
  await replace(
    iBeaconGradle,
    'compile', 'implementation',
    '[iBEACONS] Replacing compile to implementation is sucessful',
    '[iBEACONS] Error replacing compile to implementation'
  );

  await replace(
    qrScannerGradle,
    'compile', 'implementation',
    '[QR SCANNER] Replacing compile to implementation is sucessful',
    '[QR SCANNER] Error replacing compile to implementation'
  );

  await replace(
    qrScannerGradle,
    '23.1.0', '26+',
    '[QR SCANNER] Replacing gradle version 23.1.0 to 26+ is sucessful',
    '[QR SCANNER] Error replacing version gradle file to qr-scanner'
  );

  await replace(
    qrScannerGradle,
    '23.0.2', '26.0.1',
    '[QR SCANNER] Replacing gradle version 23.0.2 to 26.0.1 is sucessful',
    '[QR SCANNER] Error replacing version gradle file to qr-scanner'
  );

  await replace(
    typeormPlugin,
    'isConnected = false;', 'isConnected: boolean;',
    '[TYPEORM CONNECTION] Replacing type isConnected to boolean typeorm in typeorm Connection sucessful',
    '[TYPEORM CONNECTION] Error replacing type boolean typeorm connection'
  );

  await replace(
    queryStringPlugin,
    'unknown', 'any',
    '[QUERY-STRING] Replacing type unknown to any is sucessful',
    '[QUERY-STRING] Error replacing type any query-string'
  );
};

replaceAll();
