import { LoginPage } from './../login/login';
import { TransactionDetailPage } from './../transaction-detail/transaction-detail';
import { Storage } from '@ionic/storage';
import { AccountProvider } from './../../providers/account/account';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import  moment  from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  allTransactions = [];
  memberData: any;
  totalAmount = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage, public http: Http, public accountProvider: AccountProvider, public loadingCtrl: LoadingController) {
    
  }
  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
      content: 'กรุณารอสักครู่...'
    });
    loading.present();
    this.storage.get("member").then((res) => {
      res = JSON.parse(res);
      this.memberData = res;
      this.accountProvider.getAllTransaction(res.account.accountId).subscribe(data => {
        this.allTransactions = data;
        console.log("all transaction",data);
        
        for(var i = 0 ; i < this.allTransactions.length ; i++){
          this.totalAmount += this.allTransactions[i].amount;
          moment.locale('th');
          this.allTransactions[i].date = moment(this.allTransactions[i].date,'x').format('MMMM YYYY');
          console.log(this.allTransactions[i].date);
          
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
  viewDetail(transaction){
    let data = {
      preferPayment: this.memberData.preferPayment,
      transaction: transaction
    }
    console.log(data);
    this.navCtrl.push(TransactionDetailPage, data);
  }
}
