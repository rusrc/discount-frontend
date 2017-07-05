import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { RoomDashboardComponent } from './room-dashboard/room-dashboard.component';
import { AddCompanyComponent } from './add-company/add-company.component';

@NgModule({
  imports: [
    CommonModule,
    RoomRoutingModule
  ],
  declarations: [RoomDashboardComponent, AddCompanyComponent]
})
export class RoomModule { }
