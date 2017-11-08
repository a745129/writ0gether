import { Component } from '@angular/core';
import { NavController, NavParams, App, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/Storage';

import { LoginPage } from '../../login/login';

import { LoginService } from '../../../service/login.service';

@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html',
})
export class MinePage {
	currentUser: any;
	userNameInHead: string;
	constructor(public navCtrl: NavController,
				public navParams: NavParams,
				private appCtrl: App,
				private storage: Storage,
				private loginService: LoginService,
				private alertCtrl: AlertController) {
		this.userNameInHead = "请叫我雷锋";

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad MinePage');
	}

	goLogin(){
		this.navCtrl.push(LoginPage);
	}

	changeSetting(){

	}

	editUserinfo(){

	}

}
