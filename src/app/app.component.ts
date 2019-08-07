import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { createConnection } from 'typeorm';

@Component({
  templateUrl: 'app.html'
})
export class App {
  rootPage: string = 'CompanyPage';

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private screenOrientation: ScreenOrientation,
    public menuCtrl: MenuController
  ) {
    platform.ready().then(async () => {
      if (platform.is('android')) {
        statusBar.overlaysWebView(true);
        statusBar.backgroundColorByHexString('#00000000');
      }

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
