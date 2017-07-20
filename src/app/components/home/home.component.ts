import 'rxjs/add/operator/switchMap';

import * as fromPromotionItemAction from 'app/_redux/reducers/promotionItemReducer';
import * as fromTest from 'app/_redux/reducers/Test';

import { Action, Store } from "@ngrx/store";
import { ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, ParamMap, Params, Router, UrlSegment, UrlSegmentGroup, UrlTree } from "@angular/router";
import { AfterContentInit, AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { AngularMasonry, MasonryOptions } from 'angular2-masonry';

import { CityService } from "app/services/city.service";
import { NotificationsService } from "angular2-notifications";
import { Observable } from "rxjs/Observable";
import { Page } from "app/modules/pagination-module/page";
import { PromotionItem } from "app/models/promotion-item";
import { PromotionItemQueryFilter } from "app/models/promotion-item-query-filter";
import { PromotionItemService } from "app/services/promotion-item.service";
import { RequestOptions } from '@angular/http';
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
    _searchParams: PromotionItemQueryFilter;
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
        private store: Store<RootState>,
        private notification: NotificationsService
    )
    {
        this.promotionItemState$ = store.select(state => state.promotionItemState);
        this._searchParams = new PromotionItemQueryFilter(location.href, this.router);
    }

    ngAfterViewInit()
    {
        //this.masonry.layoutComplete.subscribe(() => console.log('layout'));
    }

    async ngOnInit()
    {
        //let cities = await this.cityService.getAll();
        this.promotionItemState$.subscribe(state =>
        {
            if (state.ErrMsg) this.notification.alert("Error", state.ErrMsg);

            this.promotionItems = state.promotionItems;
            this.gifLoader = state.isLoading;
            this.page = state.page;
            //this.masonry._msnry.reloadItems();
        });

        this.loadPromotionItems(this._searchParams.cityName);
        console.log(this._searchParams)
    }

    onTest()
    {
        this.loadPromotionItems(this._searchParams.cityName);
    }

    private loadPromotionItems(cityName: string, pageNumber: number = 1): void
    {
        this.gifLoader = true;
        this.store.dispatch({ type: "PROMOTION_ITEM_REQUEST" });
    }


    // private async getPromotionItems(): Promise<Page<PromotionItem>>
    // {

    //     if (localStorage.getItem(PROMOTION_ITEMS) && !this.promotionTimeExpired)
    //     {
    //         return Promise.resolve<Page<PromotionItem>>(JSON.parse(localStorage.getItem(PROMOTION_ITEMS)));
    //     }
    //     else
    //     {
    //         let promotionItemResult = await this.promotionItemService.getAllAsync();
    //         console.log(promotionItemResult);
    //         if (promotionItemResult.Items.length)
    //         {
    //             localStorage.setItem(PROMOTION_ITEMS, JSON.stringify(promotionItemResult));
    //         }

    //         return promotionItemResult;
    //     }
    // }

    // private get promotionTimeExpired(): boolean
    // {
    //     var firstTimeLoaded: number = Number.parseInt(localStorage.getItem(PROMOTION_FIRST_TIME_LOADED) || "0");
    //     var result = false;

    //     if (firstTimeLoaded)
    //     {
    //         result = Math.round((Date.now() - firstTimeLoaded) / 1000) >= TIME_LIMIT_SECONDS;
    //     }

    //     localStorage.setItem(PROMOTION_FIRST_TIME_LOADED, Date.now().toString());


    //     return result;
    // }

        //     if (this._urlCityName && cities.some(city => city.Alias === this._urlCityName))
        //     console.log("with city only", this._urlCityName)

        // if (this._urlCityName && !cities.some(city => city.Alias === this._urlCityName))
        //     console.log("AllCities");

        // if (!this._urlCityName)
        //     console.log("Without cities");
}
