import { AdminModule } from './admin-module/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule, Http } from '@angular/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

//http://tukifly.azurewebsites.net/Akkol/ru-Ru/Home/About
const routerConfig: Routes = [
    {
        path: '',
        redirectTo: "home",
        pathMatch: 'full'
    },
    {
        path: "home",
        component: HomeComponent,
        children: [
            //{ path: '', component: HomeComponent },
            { path: ':city', component: HomeComponent }
        ]
    },
    {
        path: 'admin',
        loadChildren: 'app/admin-module/admin.module#AdminModule'
    },
    {
        path: 'room',
        loadChildren: 'app/room-module/room/room.module#RoomModule'
    }
]

//https://github.com/ngx-translate/core
export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, './i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routerConfig, {
            enableTracing: false,
            useHash: true
        }),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [Http]
            }
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
