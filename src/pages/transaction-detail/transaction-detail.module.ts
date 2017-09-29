import { TabsPage } from './../tabs/tabs';
import { AboutPage } from './../about/about';
import { ContactPage } from './../contact/contact';
import { HomePage } from './../home/home';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransactionDetailPage } from './transaction-detail';

@NgModule({
  declarations: [
    TransactionDetailPage,
    HomePage,
    ContactPage,
    AboutPage,
    TabsPage
  ],
  imports: [
    IonicPageModule.forChild(TransactionDetailPage),
  ],
})
export class TransactionDetailPageModule {}
