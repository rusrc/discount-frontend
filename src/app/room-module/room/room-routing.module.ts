import { RoomDashboardComponent } from './room-dashboard/room-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ {
  path: '',
  component: RoomDashboardComponent, //default componetn with outlet
  children: [
    {
      path: '',
      redirectTo: 'add-company'
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
