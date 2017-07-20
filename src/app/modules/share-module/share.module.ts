import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotificationsService } from "angular2-notifications";
import { PromotionItemService } from "app/services/promotion-item.service";

@NgModule({
    providers: [ PromotionItemService ],
    // imports: [
    //     FormsModule,
    //     ReactiveFormsModule
    // ],
    // exports: [
    //     FormsModule,
    //     ReactiveFormsModule
    // ]
})
export class ShareModule { }
