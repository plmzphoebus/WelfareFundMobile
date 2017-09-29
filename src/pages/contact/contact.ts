import { BeneficiaryDetailPage } from './../beneficiary-detail/beneficiary-detail';
import { BeneficiaryProvider } from './../../providers/beneficiary/beneficiary';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController, LoadingController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import moment from 'moment';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class ContactPage {
  member = {
    memberId:0,
    firstName:"",
    lastName:"",
    birthDate:"",
    entranceDate:"",
    telephoneNumber:"",
    mobileTel:"",
    occupation:"",
    preferPayment:""
  }
  beneficiary = {
    firstName:"",
    lastName:"",
    birthDate:"",
    telephoneNumber:"",
    mobileTel:"",
    occupation:"",
    relationship:""
  }
  age: any;
  beneficiaries = [];
  constructor(public navCtrl: NavController, public storage: Storage, public modalCtrl: ModalController, public loadingCtrl: LoadingController, public beneficiaryProvider: BeneficiaryProvider) {

  }
  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
      content: 'กรุณารอสักครู่...'
    });
    loading.present();
    this.storage.get("member").then((res) => {
      this.member = JSON.parse(res);
      console.log("Member Page", this.member);
      this.age = moment().diff(this.member.birthDate, 'years',false);
      this.member.entranceDate = moment(this.member.entranceDate,"x").format("DD/MM/YYYY");
      this.beneficiaryProvider.getAllBeneficiaries(this.member.memberId).subscribe((data)=>{
        this.beneficiaries = data;
      });
      loading.dismiss();
    }).catch((error) => {
      console.log(error);
      this.storage.remove("member");
      loading.dismiss();
      this.navCtrl.setRoot(LoginPage);
    })
  }
  viewBeneficiaryDetail(beneficiary){
    let modal = this.modalCtrl.create(BeneficiaryDetailPage, beneficiary);
    console.log("Beneficiary", beneficiary);
    modal.present();
  }
}
