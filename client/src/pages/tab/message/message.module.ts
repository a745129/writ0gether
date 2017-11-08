import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessagePage } from './message';

@NgModule({
	declarations: [
		MessagePage
	],
	imports: [
		IonicPageModule.forChild(MessagePage),
		BrowserModule
	],
	entryComponents: [
		MessagePage
	],
	providers: [
		
	]
})
export class MessageModule {}
