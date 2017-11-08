import { Component } from '@angular/core';
import { Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/Storage';

import { TabPage } from '../pages/tab/tab';
import { LoginPage } from '../pages/login/login';

import { LoginService } from '../service/login.service';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any = TabPage;
	constructor(public platform: Platform,
				public statusBar: StatusBar,
				public splashScreen: SplashScreen,
				public storage: Storage,
				private toastCtrl: ToastController,
				private loginService: LoginService) {
      	platform.ready().then(() => {
    		statusBar.styleDefault();
        	splashScreen.hide();
      	});
    }
}

