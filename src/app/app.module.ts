import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MeteoService } from '../services/meteo.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MeteoPage } from '../pages/meteo/meteo';
import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { NgCalendarModule } from 'ionic2-calendar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';
import { AngularFireAuth } from "angularfire2/auth";
import { IonicStorageModule } from "@ionic/storage";
import { FoyerPage } from "../pages/foyer/foyer";
import { FoyerService } from "../services/foyer.service";
import { UserService } from "../services/user.service";
import { FoyerModal } from "../pages/modals/foyer";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        LoginPage,
        FoyerPage,
        MeteoPage,
        FoyerModal
    ],
    imports: [
        BrowserModule,
        HttpModule,
        NgCalendarModule,
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        LoginPage,
        FoyerPage,
        MeteoPage,
        FoyerModal
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        MeteoService,
        FoyerService,
        UserService,
        Geolocation,
        AngularFireAuth,
        AngularFireDatabase
    ]
})
export class AppModule {}
