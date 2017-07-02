import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, Routes, RouterModule } from '@angular/router';
import { AddRealstateComponent } from './add-realstate/add-realstate.component';
import { RealstateListComponent } from "app/admin-module/realstate-list/realstate-list.component";
import { DashboardComponent } from './dashboard/dashboard.component';

const routerConfig: Routes = [
  // {
  //   path: '',
  //   redirectTo: "dashboard",
  //   component: DashboardComponent
  // },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'add-realstate'
      },
      {
        path: 'add-realstate',
        component: AddRealstateComponent
      },
      {
        path: 'realstate-list',
        component: RealstateListComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routerConfig)
  ],
  declarations: [
    AddRealstateComponent,
    RealstateListComponent,
    DashboardComponent
  ]
  //exports: [ AdminModuleModule ]
})
export class AdminModule
{
  // static forRoot(): ModuleWithProviders
  // {
  //   return {
  //     ngModule: AdminModuleModule
  //     //providers: [ null ] //services
  //   }
  // }
}
