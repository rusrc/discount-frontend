import { AdminModule } from './admin-module/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routerConfig: Routes = [
  {
    path: '',
    redirectTo: "home",
    pathMatch: 'full'
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: 'admin',
    loadChildren: 'app/admin-module/admin.module#AdminModule'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerConfig, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
