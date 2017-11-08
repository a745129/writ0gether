import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from './home/home';
import { MinePage } from './mine/mine';
import { MessagePage } from './message/message';


@Component({
	selector: 'page-tab',
	templateUrl: 'tab.html',
})
export class TabPage {
	
	tabRoot1: any = MessagePage
	tabRoot2: any = HomePage
	tabRoot3: any = MinePage

	constructor(public navCtrl: NavController, 
				public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad TabPage');
	}

}
