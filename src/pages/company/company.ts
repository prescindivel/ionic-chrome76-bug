import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, AbstractControl, FormControl } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

import { ListAnimation, ItemAnimation } from '../../app/animations';
import { Observable } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-company',
  templateUrl: 'company.html',
  animations: [
    ListAnimation,
    ItemAnimation
  ]
})
export class CompanyPage {
  companyForm: FormGroup;
  account: AccountMinimalType;
  company: CompanyStoreType;

  constructor(
    private statusBar: StatusBar,
    public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder,
  ) {
    this.createForm();
  }

  createForm() {
    const cpfRegex = /^((\d{3}).(\d{3}).(\d{3})-(\d{2}))*$/;

    this.companyForm = this.fb.group({
      company: new FormControl(
        null,
        Validators.required,
      ),
      cpf: new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(14),
          Validators.maxLength(14),
          Validators.pattern(cpfRegex)
        ],
        this.checkCpfAccount.bind(this)
      ),
      rememberMe: new FormControl(false)
    });
  }

  ionViewWillEnter() {
    this.statusBar.styleLightContent();
  }

  onSubmit() {
    if (this.companyForm.invalid) {
      return;
    }

    this.navCtrl.push('LoginPage', {
      account: this.account,
      company: this.company,
      rememberMe: this.companyForm.get('rememberMe').value
    }, { animate: true, direction: 'forward' });
  }

  checkCpfAccount(control: AbstractControl) {
    if (this.companyForm.get('company').invalid) {
      return Promise.resolve({ companyNotSelected: true });
    }

  }

}
