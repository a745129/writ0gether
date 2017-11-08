import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

//结构模块
import { MyApp } from './app.component';
import { LoginModule } from '../pages/login/login.module';
import { TabModule } from '../pages/tab/tab.module';
//服务
import { LoginService } from '../service/login.service';


@NgModule({
    declarations: [
      MyApp
    ],
    imports: [
		IonicModule.forRoot(MyApp, {
			backButtonText: '',
			pageTransition: 'ios-transition',
			spinner:'bubbles',
			swipeBackEnabled: true,
		}),
		IonicStorageModule.forRoot(),
		BrowserModule,
		ReactiveFormsModule,
		HttpModule,
		JsonpModule,
		//自定义模块
		LoginModule,
		TabModule,
    ],
    bootstrap: [IonicApp],
    entryComponents: [
      MyApp
    ],
    providers: [
			{
				provide: ErrorHandler, 
				useClass: IonicErrorHandler
			},
			StatusBar,
			SplashScreen,
			//自定义服务
			LoginService,
    ]
})
export class AppModule {}
