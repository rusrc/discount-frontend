import { AdminModule } from './admin-module/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule, Http } from '@angular/http';
import { MasonryModule } from 'angular2-masonry';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PromotionItemComponent } from './promotion-item/promotion-item.component';

import { RegistrationComponent } from './registration/registration.component';
import { AuthorizationComponent } from './authorization/authorization.component';import { PaginationModule } from "app/pagination-module/pagination/pagination.module";
//https://github.com/jelgblad/angular2-masonry
//drag and drop https://github.com/akserg/ng2-dnd
//http://tukifly.azurewebsites.net/Akkol/ru-Ru/Home/About
const routerConfig: Routes = [
    {
        path: '', redirectTo: "home", pathMatch: 'full'
    },
    {
        path: "home", component: HomeComponent,
        children: [
            //{ path: '', component: HomeComponent },
            {
                path: ':city', component: HomeComponent
            }
        ]
    },
    { path: 'about', component: AboutComponent },
    { path: 'admin', loadChildren: 'app/admin-module/admin.module#AdminModule' },
    { path: 'room', loadChildren: 'app/room-module/room/room.module#RoomModule' },
    { path: 'registration', component: RegistrationComponent },
    { path: 'authorization', component: AuthorizationComponent },
    { path: '**', redirectTo: 'home' }//Not found
]

//https://github.com/ngx-translate/core
export function createTranslateLoader(http: Http)
{
    return new TranslateHttpLoader(http, './i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        PromotionItemComponent,
        RegistrationComponent,
        AuthorizationComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        MasonryModule,
        PaginationModule.forRoot(),
        RouterModule.forRoot(routerConfig, {
            enableTracing: false,
            useHash: false
        }),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [ Http ]
            }
        })
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
