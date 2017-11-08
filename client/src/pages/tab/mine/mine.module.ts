import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MinePage } from './mine';

@NgModule({
	declarations: [
		MinePage
	],
	imports: [
		//IonicModule,
		IonicPageModule.forChild(MinePage),
		BrowserModule
	],
	entryComponents: [
		MinePage
	],
	providers: [
		
	]
})
export class MineModule {}
