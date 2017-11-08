import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-form-new',
  templateUrl: 'form-new.html',
})
export class FormNewPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad FormNewPage');
    }


    publish(){
      console.log('PUBLISH');
    }
}
