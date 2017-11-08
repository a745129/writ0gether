import { Component, ViewChild } from '@angular/core';
import { App, ToastController, AlertController, LoadingController, Loading, IonicPage, ViewController, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { Storage } from '@ionic/storage';

import { TabPage } from "../tab/tab";

import { LoginService } from '../../service/login.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	constructor(public navCtrl: NavController,
				public storage: Storage,
				private toastCtrl: ToastController,
				private loginService: LoginService,
				private alertCtrl: AlertController,
				private loadingCtrl: LoadingController) {

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad LoginPage');
	}

  	login(string) {
		if (string == 'wechat') {

		}
		if (string == 'qq') {

		}
	}

}
