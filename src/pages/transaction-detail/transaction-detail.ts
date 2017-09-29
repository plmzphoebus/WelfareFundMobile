import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import moment from 'moment';

/**
 * Generated class for the TransactionDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-transaction-detail',
  templateUrl: 'transaction-detail.html',
})
export class TransactionDetailPage {
  transaction:any;
  preferPayment:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.transaction = this.navParams.data.transaction;
    this.preferPayment = this.navParams.data.preferPayment;
    this.transaction.startDate = moment(this.transaction.startDate,'x').format('MMMM');
    this.transaction.endDate = moment(this.transaction.endDate,'x').format('MMMM');
    console.log(this.preferPayment);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionDetailPage 2');
  }

}
