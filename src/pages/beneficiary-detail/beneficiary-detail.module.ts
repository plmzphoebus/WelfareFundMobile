import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeneficiaryDetailPage } from './beneficiary-detail';

@NgModule({
  declarations: [
    BeneficiaryDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BeneficiaryDetailPage),
  ],
})
export class BeneficiaryDetailPageModule {}
