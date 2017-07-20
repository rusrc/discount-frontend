import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotificationsService } from "angular2-notifications";
import { PromotionItemService } from "app/services/promotion-item.service";

@NgModule({
  providers: [PromotionItemService]
})
export class ShareModule { }
