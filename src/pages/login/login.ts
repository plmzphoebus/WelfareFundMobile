import { MenuPage } from './../menu/menu';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { MemberProvider } from '../../providers/member/member';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  citizenId:string
  memberData: {
    citizen:string
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,public memberProvider: MemberProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    let loading = this.loadingCtrl.create({
      content: 'กรุณารอสักครู่...'
    });
    loading.present();
    this.storage.get("member").then((res) => {
      res = JSON.parse(res);
      this.memberProvider.login(res.citizen).subscribe(data => {
        this.navCtrl.setRoot(MenuPage);
        loading.dismiss();
      }, (error) => {
        console.log(error);
        loading.dismiss();
      });
    }).catch((error) =>{
      console.log(error);
      loading.dismiss();
      this.storage.remove("member");
    });
   
    
    
  }

  login(citizenId: string){
    let loading = this.loadingCtrl.create({
      content: 'กรุณารอสักครู่...'
    });
    loading.present();
    console.log(citizenId);
    this.memberProvider.login(citizenId).subscribe(data => {
      console.log("data",JSON.stringify(data));
      this.storage.set("member",JSON.stringify(data)).then(() =>{
        
      });
      
	  this.navCtrl.setRoot(MenuPage);
      loading.dismiss();
    },error => {
      loading.dismiss();
      console.log("error",error);
      this.showAlert();
    });
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'แจ้งเตือน',
      subTitle: 'หมายเลขบัตรประชาชนนี้ไม่มีอยู่ในระบบ',
      buttons: [{text:'ฉันเข้าใจแล้ว',cssClass:"alertcss"}],
      
    });
    alert.present();
  }
}
