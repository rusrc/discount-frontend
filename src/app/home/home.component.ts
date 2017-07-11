import { Component, OnInit, DoCheck, AfterContentInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd, UrlSegment, UrlSegmentGroup, UrlTree, PRIMARY_OUTLET } from "@angular/router";
import { PromotionItem } from "app/models/promotion-item";
import { PromotionItemService } from "app/services/promotion-item.service";
import { AngularMasonry, MasonryOptions } from 'angular2-masonry';
import 'rxjs/add/operator/switchMap';
import { Page } from "app/pagination-module/page";
import { CityService } from "app/services/city.service";

const PROMOTION_ITEMS = 'promotionItems';
const PROMOTION_FIRST_TIME_LOADED = 'promotionTimeLoaded';
const TIME_LIMIT_SECONDS = 1;

@Component({
    selector: 'app-home',
    providers: [
        PromotionItemService,
        CityService
    ],
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, AfterViewInit
{
    promotionItems: PromotionItem[];
    gifLoader: boolean = true;
    page: Page<PromotionItem>;

    options: MasonryOptions = {
        transitionDuration: '0.3s',
        itemSelector: '.post-box',
        columnWidth: '.post-box'
    }

    @ViewChild(AngularMasonry) masonry: AngularMasonry;

    constructor(
        private router: Router,
        private activeRoute: ActivatedRoute,
        private promotionItemService: PromotionItemService,
        private cityService: CityService
    ) { }

    ngAfterViewInit()
    {
        //this.masonry.layoutComplete.subscribe(() => console.log('layout'));
    }

    async ngOnInit()
    {
        //https://angular.io/api/router/UrlSegment
        const tree: UrlTree = this.router.parseUrl(this.router.url);
        const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
        const segments: UrlSegment[] = g.segments;

        let urlCity = g.segments[1] ? g.segments[1].path : "";
        let pageNumber = g.segments[2] ? g.segments[2].path : "";

        let pageWithItems: Page<PromotionItem> = null;
        let cities = await this.cityService.getAll();


        if (urlCity && cities.some(city => city.Alias === urlCity))
        {
            console.log("with city only", urlCity)
            pageWithItems = await this.getPromotionItems();
        }

        if (urlCity && !cities.some(city => city.Alias === urlCity))
        {
            console.log("AllCities");
            pageWithItems = await this.getPromotionItems();
        }

        if (!urlCity)
        {
            console.log("Without cities");
            pageWithItems = await this.getPromotionItems();
        }

        this.promotionItems = pageWithItems.Items;
        this.page = pageWithItems;
        this.gifLoader = false;

        console.log("Path from root", urlCity, pageNumber);

    }

    private async getPromotionItems(): Promise<Page<PromotionItem>>
    {

        if (localStorage.getItem(PROMOTION_ITEMS) && !this.promotionTimeExpired)
        {
            return Promise.resolve<Page<PromotionItem>>(JSON.parse(localStorage.getItem(PROMOTION_ITEMS)));
        }
        else
        {
            let promotionItemResult = await this.promotionItemService.getAll();
            console.log(promotionItemResult);
            if (promotionItemResult.Items.length)
            {
                localStorage.setItem(PROMOTION_ITEMS, JSON.stringify(promotionItemResult));
            }

            return promotionItemResult;
        }
    }

    private get promotionTimeExpired(): boolean
    {
        var firstTimeLoaded: number = Number.parseInt(localStorage.getItem(PROMOTION_FIRST_TIME_LOADED) || "0");
        var result = false;

        if (firstTimeLoaded)
        {
            result = Math.round((Date.now() - firstTimeLoaded) / 1000) >= TIME_LIMIT_SECONDS;
        }

        localStorage.setItem(PROMOTION_FIRST_TIME_LOADED, Date.now().toString());


        return result;
    }
}
