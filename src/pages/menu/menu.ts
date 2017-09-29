import { LoginPage } from './../login/login';
import { Storage } from '@ionic/storage';
import { SettingPage } from './../setting/setting';
import { IntroductionPage } from './../introduction/introduction';
import { HomePage } from './../home/home';
import { TabsPage } from './../tabs/tabs';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, AlertController, LoadingController } from 'ionic-angular';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export interface PageInterface{
  title: string;
  pageName: any;
  tabComponent?: any;
  index?: number;
  icon: string;
  name: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage = TabsPage;

  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    {title:'หน้าหลัก', pageName: TabsPage, tabComponent: HomePage, index: 0, icon:'home', name:"HomePage"},
    {title:'แนะนำการใช้งาน', pageName: IntroductionPage, icon:'help-circle', name:"IntroductionPage"},
    {title:'ตั้งค่า', pageName: SettingPage, icon:'settings', name:"SettingPage"},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {

  }

  openPage(page: PageInterface){
    let params = {};
    if(page.index){
      params = {tabIndex: page.index};
    }
    if(this.nav.getActiveChildNav() && page.index != undefined){
      this.nav.getActiveChildNav().select(page.index);
    }else{
      this.nav.setRoot(page.pageName, params);
    }
  }

  isActive(page: PageInterface){
    let childNav = this.nav.getActiveChildNav();
    if(childNav){
      if(childNav.getSelected() && childNav.getSelected().root === page.tabComponent){
        return 'primary';
      }
      return;
    }
    if(this.nav.getActive() && this.nav.getActive().name === page.name){
      return 'primary';
    }
  }

  logout(){
    let loading = this.loadingCtrl.create({
      content: 'กรุณารอสักครู่...'
    });
    let confirm = this.alertCtrl.create({
      title: 'ข้อความจากระบบ',
      message: 'คุณต้องการออกจากระบบหรือไม่',
      buttons: [
        {
          text: 'ไม่ใช่',
          handler: () => {
            
          }
        },
        {
          text: 'ใช่',
          handler: () => {
            loading.present();
            this.storage.remove("member").then(()=>{
              loading.dismiss();
              this.navCtrl.setRoot(LoginPage);
            });
            
          }
        }
      ]
    });
    confirm.present();
  }


}
