import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AboutComponent } from './components/about/about.component';
import { AppComponent } from './app.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DataFetchEffects } from "app/_redux/effects/DataFetchEffects";
import { EffectsModule } from "@ngrx/effects";
import { HomeComponent } from './components/home/home.component';
import { MainEffects } from "app/_redux/effects";
import { MasonryModule } from 'angular2-masonry';
import { PaginationModule } from "app/modules/pagination-module/pagination/pagination.module";
import { PromotionItemComponent } from './components/promotion-item/promotion-item.component';
import { PromotionItemSearchFormComponent } from './components/promotion-item-search-form/promotion-item-search-form.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ShareModule } from "app/modules/share-module/share.module";
import { SimpleNotificationsModule } from 'angular2-notifications';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { reducer } from 'app/_redux/reducers';

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
            {
                path: ':city', component: HomeComponent,
                children: [
                    { path: ':page', component: HomeComponent }
                ]
            }
        ]
    },
    { path: 'about', component: AboutComponent },
    { path: 'room', loadChildren: 'app/modules/room-module/room/room.module#RoomModule' },
    { path: 'registration', component: RegistrationComponent },
    { path: 'authorization', component: AuthorizationComponent },
    { path: '**', redirectTo: 'home' }//Not found
]

//https://github.com/ngx-translate/core
export function createTranslateLoader(http: Http)
{
    return new TranslateHttpLoader(http, './i18n/', '.json');
}

const appEffectsRun = [
    EffectsModule.run(MainEffects),
    EffectsModule.run(DataFetchEffects)
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        PromotionItemComponent,
        RegistrationComponent,
        AuthorizationComponent,
        PromotionItemSearchFormComponent
    ],
    imports: [
        ShareModule,
        BrowserModule,
        HttpModule,
        MasonryModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        SimpleNotificationsModule.forRoot(),
        PaginationModule.forRoot(),
        RouterModule.forRoot(routerConfig, {
            enableTracing: false,
            useHash: false
        }),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [Http]
            }
        }),
        StoreModule.provideStore(reducer),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
        ...appEffectsRun
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
