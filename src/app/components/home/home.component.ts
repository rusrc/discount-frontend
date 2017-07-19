import 'rxjs/add/operator/switchMap';

import * as fromPromotionItemAction from 'app/_redux/reducers/promotionItemReducer';
import * as fromTest from 'app/_redux/reducers/Test';

import { Action, Store } from "@ngrx/store";
import { ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, ParamMap, Router, UrlSegment, UrlSegmentGroup, UrlTree } from "@angular/router";
import { AfterContentInit, AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { AngularMasonry, MasonryOptions } from 'angular2-masonry';

import { CityService } from "app/services/city.service";
import { Observable } from "rxjs/Observable";
import { Page } from "app/modules/pagination-module/page";
import { PromotionItem } from "app/models/promotion-item";
import { PromotionItemService } from "app/services/promotion-item.service";
import { State as RootState } from "app/_redux/reducers";

const PROMOTION_ITEMS = 'promotionItems';
const PROMOTION_FIRST_TIME_LOADED = 'promotionTimeLoaded';
const TIME_LIMIT_SECONDS = 1;

@Component({
    selector: 'app-home',
    providers: [
        CityService
    ],
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, AfterViewInit
{
    promotionItems: PromotionItem[];
    gifLoader: boolean = true;
    page: Page<PromotionItem>;
    _urlCityName: string;
    _pageNumber: number;
    testState$: Observable<fromTest.State>;
    promotionItemState$: Observable<fromPromotionItemAction.promotionItemState>;
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
        private cityService: CityService,
        private store: Store<RootState>
    )
    {
        this.testState$ = store.select(state => state.test);
        this.promotionItemState$ = store.select(state => state.promotionItemState);

        this.testState$.subscribe(result => console.log(result.str));

    }

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

        this._urlCityName = g.segments[1] ? g.segments[1].path : "";
        this._pageNumber = Number.parseInt(g.segments[2] ? g.segments[2].path : "");

        let pageWithItems: Page<PromotionItem> = null;
        let cities = await this.cityService.getAll();


        if (this._urlCityName && cities.some(city => city.Alias === this._urlCityName))
        {
            console.log("with city only", this._urlCityName)
            //pageWithItems = await this.getPromotionItems();
        }

        if (this._urlCityName && !cities.some(city => city.Alias === this._urlCityName))
        {
            console.log("AllCities");
            //pageWithItems = await this.getPromotionItems();
        }

        if (!this._urlCityName)
        {
            console.log("Without cities");
            //pageWithItems = await this.getPromotionItems();
        }

        this.promotionItemState$.subscribe(state =>
        {
            this.promotionItems = state.promotionItems;
            this.gifLoader = state.isLoading;
            this.masonry._msnry.reloadItems();
            this.page = state.page;
        });

        //this.promotionItems = pageWithItems.Items;
        //this.page = pageWithItems;
        this.loadPromotionItems(this._urlCityName, 1);

        console.log("Path from root", this._urlCityName, this._pageNumber);

    }

    onTest()
    {
        console.log("this._urlCity", this._urlCityName, this._pageNumber);
        this.loadPromotionItems(this._urlCityName, 1);
    }

    private loadPromotionItems(cityName: string, pageNumber: number): void
    {
        this.gifLoader = true;
        this.store.dispatch({ type: "PROMOTION_ITEM_REQUEST" });
    }

    private async getPromotionItems(): Promise<Page<PromotionItem>>
    {

        if (localStorage.getItem(PROMOTION_ITEMS) && !this.promotionTimeExpired)
        {
            return Promise.resolve<Page<PromotionItem>>(JSON.parse(localStorage.getItem(PROMOTION_ITEMS)));
        }
        else
        {
            let promotionItemResult = await this.promotionItemService.getAllAsync();
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
