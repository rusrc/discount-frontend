import { Component, OnInit, DoCheck, AfterContentInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from "@angular/router";
import { PromotionItem } from "app/models/promotion-item";
import { PromotionItemService } from "app/services/promotion-item.service";
import { AngularMasonry, MasonryOptions } from 'angular2-masonry';
import 'rxjs/add/operator/switchMap';

const PROMOTION_ITEMS = 'promotionItems';
const PROMOTION_FIRST_TIME_LOADED = 'promotionTimeLoaded';
const TIME_LIMIT_SECONDS = 30;

@Component({
    selector: 'app-home',
    providers: [PromotionItemService],
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, AfterViewInit
{
    promotionItems: PromotionItem[] = [];
    gifLoader: boolean = true;

    options: MasonryOptions = {
        transitionDuration: '0.3s',
        itemSelector: '.post-box',
        columnWidth: '.post-box'
    }

    @ViewChild(AngularMasonry) masonry: AngularMasonry;

    constructor(
        private router: Router,
        private activeRoute: ActivatedRoute,
        private promotionItemService: PromotionItemService
    ) { }

    ngAfterViewInit()
    {
        this.masonry.layoutComplete.subscribe(() => console.log('layout'));
    }

    async ngOnInit()
    {
        let city = this.activeRoute.snapshot.firstChild ? this.activeRoute.snapshot.firstChild.url[0].path : "";

        this.promotionItems = await this.getPromotionItems();
        this.gifLoader = false;

        console.log(this.promotionItems);
        console.log("Path from root", city);

        // this.router.events.subscribe((event) => {
        //   if (event instanceof NavigationEnd) {
        //     console.log(event.url);
        //   }
        // });
    }

    private async getPromotionItems(): Promise<PromotionItem[]>
    {

        if (localStorage.getItem(PROMOTION_ITEMS) && !this.promotionTimeExpired)
        {
            return Promise.resolve<PromotionItem[]>(JSON.parse(localStorage.getItem(PROMOTION_ITEMS)));
        }
        else
        {
            let items = await this.promotionItemService.getAll();

            if (items.length)
            {
                localStorage.setItem(PROMOTION_ITEMS, JSON.stringify(items));
            }

            return items;
        }
    }

    private get promotionTimeExpired(): boolean
    {

        var firstTimeLoaded: number = Number.parseInt(localStorage.getItem(PROMOTION_FIRST_TIME_LOADED) || "0");
        var result  = false;

        if (firstTimeLoaded)
        {
           result = Math.round((Date.now() - firstTimeLoaded) / 1000) >= TIME_LIMIT_SECONDS;
        }

        localStorage.setItem(PROMOTION_FIRST_TIME_LOADED, Date.now().toString());


        return result;
    }
}
