import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { RoomDashboardComponent } from './room-dashboard/room-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    RoomRoutingModule
  ],
  declarations: [RoomDashboardComponent]
})
export class RoomModule { }
