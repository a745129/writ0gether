import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';


@NgModule({
	declarations: [
		HomePage
	],
	imports: [
		IonicPageModule.forChild(HomePage),
		BrowserModule,
	],
	entryComponents: [
		HomePage
	],
	providers: [
		
	]
})
export class HomeModule {}
