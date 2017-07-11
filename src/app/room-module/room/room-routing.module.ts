import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCompanyComponent } from "app/room-module/room/add-company/add-company.component";
import { PromotionListComponent } from './promotion-list/promotion-list.component';
import { AddPromotionComponent } from './add-promotion/add-promotion.component';
import { RealstateListComponent } from './realstate-list/realstate-list.component';
import { AddRealstateComponent } from './add-realstate/add-realstate.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { RoomDashboardComponent } from './room-dashboard/room-dashboard.component';


const routes: Routes = [ {
    path: '',
    component: RoomDashboardComponent, //default component with outlet
    children: [
        { path: '', redirectTo: 'add-company' },
        { path: 'add-company', component: AddCompanyComponent },
        { path: 'list-of-companies', component: CompanyListComponent },
        { path: 'add-realstate', component: AddRealstateComponent },
        { path: 'list-of-realstate', component: RealstateListComponent },
        { path: 'add-promotion', component: AddPromotionComponent },
        { path: 'list-of-promotion', component: PromotionListComponent }
    ]
}];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class RoomRoutingModule { }
