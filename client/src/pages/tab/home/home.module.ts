import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import {FormNewPage} from './form/form-new';

@NgModule({
	declarations: [
		HomePage,
		FormNewPage
	],
	imports: [
		IonicPageModule.forChild(HomePage),
		BrowserModule
	],
	entryComponents: [
		HomePage,
		FormNewPage
	],
	providers: [
		
	]
})
export class HomeModule {}
