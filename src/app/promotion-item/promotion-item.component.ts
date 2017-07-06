import { Component, OnInit, Input } from '@angular/core';
import { PromotionItem } from "app/models/promotion-item";


@Component({
  selector: 'app-promotion-item',
  templateUrl: './promotion-item.component.html',
  styleUrls: ['./promotion-item.component.css']
})
export class PromotionItemComponent implements OnInit {

  constructor() { }

  @Input() promotionItem: PromotionItem;

  ngOnInit() {
  }

}
