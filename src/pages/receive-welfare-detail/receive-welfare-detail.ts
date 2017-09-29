import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReceiveWelfareDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-receive-welfare-detail',
  templateUrl: 'receive-welfare-detail.html',
})
export class ReceiveWelfareDetailPage {
  receiveWelfare: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.receiveWelfare = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReceiveWelfareDetailPage');
  }

}
