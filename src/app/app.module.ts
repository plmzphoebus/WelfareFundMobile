import { SettingPage } from './../pages/setting/setting';
import { IntroductionPage } from './../pages/introduction/introduction';
import { MenuPage } from './../pages/menu/menu';
import { BeneficiaryDetailPage } from './../pages/beneficiary-detail/beneficiary-detail';

import { ReceiveWelfareDetailPage } from './../pages/receive-welfare-detail/receive-welfare-detail';
import { TransactionDetailPage } from './../pages/transaction-detail/transaction-detail';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MemberProvider } from '../providers/member/member';
import { AccountProvider } from '../providers/account/account';
import { ReceiveWelfareProvider } from '../providers/receive-welfare/receive-welfare';
import { IonicStorageModule } from '@ionic/storage';
import { BeneficiaryProvider } from '../providers/beneficiary/beneficiary';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    TransactionDetailPage,
    ReceiveWelfareDetailPage,
    BeneficiaryDetailPage,
    MenuPage,
    IntroductionPage,
    SettingPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    TransactionDetailPage,
    ReceiveWelfareDetailPage,
    BeneficiaryDetailPage,
    MenuPage,
    IntroductionPage,
    SettingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MemberProvider,
    AccountProvider,
    ReceiveWelfareProvider,
    BeneficiaryProvider
  ]
})
export class AppModule {}
