import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { RoomDashboardComponent } from './room-dashboard/room-dashboard.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { AddRealstateComponent } from './add-realstate/add-realstate.component';
import { RealstateListComponent } from './realstate-list/realstate-list.component';
import { AddPromotionComponent } from './add-promotion/add-promotion.component';
import { PromotionListComponent } from './promotion-list/promotion-list.component';

@NgModule({
    imports: [
        CommonModule,
        RoomRoutingModule
    ],
    declarations: [
        RoomDashboardComponent,
        AddCompanyComponent,
        CompanyListComponent,
        AddRealstateComponent,
        RealstateListComponent,
        AddPromotionComponent,
        PromotionListComponent
    ]
})
export class RoomModule { }
