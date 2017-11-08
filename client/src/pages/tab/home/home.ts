import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormNewPage} from './form/form-new';

@Component({
    templateUrl: 'home.html'
})
export class HomePage {
    
    constructor(public navCtrl: NavController) {

    }


    doTap(){
        //console.log("tapped");
        this.navCtrl.push(FormNewPage);
    }
}
