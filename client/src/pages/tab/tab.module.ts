import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabPage } from './tab';
//导入其他模块
import { HomeModule } from './home/home.module';
import { MineModule } from './mine/mine.module';
import { MessageModule } from './message/message.module';


@NgModule({
	declarations: [
		TabPage
	],
	imports: [
		IonicPageModule.forChild(TabPage),
		BrowserModule,
	//导入子模块
		HomeModule,
		MineModule,
		MessageModule
	],
	entryComponents: [
		TabPage
	],
	providers: [
		
	]
})
export class TabModule {}
