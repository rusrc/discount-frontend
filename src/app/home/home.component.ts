import { Component, OnInit, DoCheck, AfterContentInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from "@angular/router";
import { PromotionItem } from "app/models/promotion-item";
import { PromotionItemService } from "app/services/promotion-item.service";
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-home',
    providers: [ PromotionItemService ],
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit
{
    promotionItems: PromotionItem[] = [];
    loading: string = 'loading...';

    constructor(
        private router: Router,
        private activeRoute: ActivatedRoute,
        private promotionItemService: PromotionItemService
    )
    {

        // this.promotionItems = [
        //     new PromotionItem(),
        //     new PromotionItem()
        // ];

    }

    async ngOnInit()
    {
        let city = this.activeRoute.snapshot.firstChild
            ? this.activeRoute.snapshot.firstChild.url[ 0 ].path
            : "";

        this.promotionItems = await this.promotionItemService.getAll();
        this.loading = '';

        console.log(this.promotionItems);
        console.log("Path from root", city);

        // this.router.events.subscribe((event) => {
        //   if (event instanceof NavigationEnd) {
        //     console.log(event.url);
        //   }
        // });
    }

}
