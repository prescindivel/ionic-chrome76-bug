import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { App } from './app.component';
// Ionic Native
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Network } from '@ionic-native/network';
import { IBeacon } from '@ionic-native/ibeacon';
import { QRScanner } from '@ionic-native/qr-scanner';
import { BackgroundMode } from '@ionic-native/background-mode';


@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(App, {
      platforms: {
        ios: {
          backButtonText: '',
          scrollAssist: false,
          autoFocusAssist: false,
        }
      }
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    App
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    Network,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    IBeacon,
    QRScanner,
    BackgroundMode,
  ]
})
export class AppModule { }
