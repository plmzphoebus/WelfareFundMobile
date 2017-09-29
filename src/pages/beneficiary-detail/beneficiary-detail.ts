import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import moment from 'moment';

/**
 * Generated class for the BeneficiaryDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-beneficiary-detail',
  templateUrl: 'beneficiary-detail.html',
})
export class BeneficiaryDetailPage {
  age:any;
  beneficiary:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.beneficiary = this.navParams.data;
    this.age = moment().diff(this.beneficiary.birthDate, 'years',false);
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }


}
