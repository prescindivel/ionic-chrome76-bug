import { NavController } from "ionic-angular";

export abstract class BasePage {
  constructor(
    public navCtrl: NavController,
  ) { }

  /**
   * @see https://github.com/ionic-team/ionic/issues/11459#issuecomment-365224107
   */
  protected setRootAsync(page: string, params?: any) {
    setTimeout(() => this.navCtrl.setRoot(page, params), 0);
  }
}
