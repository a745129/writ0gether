import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/Storage';

import { LoginPage } from './login';

@NgModule({
	declarations: [
		LoginPage
	],
	imports: [
		IonicPageModule.forChild(LoginPage),
		IonicStorageModule.forRoot(),
		BrowserModule
	],
	entryComponents: [
		LoginPage
	],
	providers: [
		
	]
})
export class LoginModule {}
