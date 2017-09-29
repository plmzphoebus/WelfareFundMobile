import { ReceiveWelfareDetailPage } from './../receive-welfare-detail/receive-welfare-detail';
import { LoginPage } from './../login/login';
import { ReceiveWelfareProvider } from './../../providers/receive-welfare/receive-welfare';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import moment from 'moment';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  allReceiveWelfare = [];
  memberData: any;
  totalAmount = 0;
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public storage:Storage, public receiveWelfareProvider: ReceiveWelfareProvider) {

  }

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
      content: 'กรุณารอสักครู่...'
    });
    loading.present();
    this.storage.get("member").then((res) => {
      res = JSON.parse(res);
      this.memberData = res;
      this.receiveWelfareProvider.getAllReceiveWelfare(this.memberData.memberId).subscribe(data => {
        this.allReceiveWelfare = data;
        console.log("all transaction",data);
        
        for(var i = 0 ; i < this.allReceiveWelfare.length ; i++){
          this.totalAmount += this.allReceiveWelfare[i].amount;
          moment.locale('th');
          this.allReceiveWelfare[i].date = moment(this.allReceiveWelfare[i].date,'x').format('DD/MM/YYYY');
          console.log(this.allReceiveWelfare[i].date);
          
        }
        loading.dismiss();
      }, error => {
        loading.dismiss();
        console.log(error.data);
      })
    }).catch((error) =>{
      console.log(error);
      this.storage.remove("member");
      loading.dismiss();
      this.navCtrl.setRoot(LoginPage);
    });
  }

  viewDetail(receiveWelfare){
    
    this.navCtrl.push(ReceiveWelfareDetailPage, receiveWelfare);
  }

}
