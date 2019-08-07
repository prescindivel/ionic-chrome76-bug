import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanyPage } from './company';
import { FormsModule } from '@angular/forms';

import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    CompanyPage
  ],
  imports: [
    IonicPageModule.forChild(CompanyPage),
    FormsModule,
    BrMaskerModule,
  ],
  exports: [
    CompanyPage,
  ]
})
export class CompanyPageModule {}
