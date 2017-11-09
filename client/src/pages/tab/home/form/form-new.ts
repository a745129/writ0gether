import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-form-new',
  templateUrl: 'form-new.html',
})
export class FormNewPage {

    @ViewChild("contentDiv") contentDiv;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad FormNewPage');
    }


    publish(){
      console.log('PUBLISH');
    }

    startEdit(ev){
      console.log(ev);
      let nativeEl = this.contentDiv.nativeElement;
      // console.log(nativeEl.innerHTML);
      nativeEl.innerHTML = "";

    }
}
