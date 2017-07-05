import { RoomDashboardComponent } from './room-dashboard/room-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCompanyComponent } from "app/room-module/room/add-company/add-company.component";


const routes: Routes = [ {
  path: '',
  component: RoomDashboardComponent, //default component with outlet
  children: [
    {
      path: '',
      redirectTo: 'add-company'
    },
    {
      path: 'add-company',
      component: AddCompanyComponent
    },
    {
      path: 'list-of-companies',
      component: null
    }
  ]
}];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class RoomRoutingModule { }
