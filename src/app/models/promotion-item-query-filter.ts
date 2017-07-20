import { ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, ParamMap, Params, Router, UrlSegment, UrlSegmentGroup, UrlTree } from "@angular/router";
import { Injectable, ReflectiveInjector } from '@angular/core';

//https://angular.io/api/router/UrlSegment
export class PromotionItemQueryFilter
{
    private _searchParams: URLSearchParams
    private _tree: UrlTree;
    private _segmentGroup;
    private _segments: UrlSegment[];

    private _urlCityName: string = "";
    private _pageNumber: Number = 0;

    constructor(queryString: string, router: Router)
    {
        this._tree = router.parseUrl(router.url);
        this._segmentGroup = this._tree.root.children[PRIMARY_OUTLET];
        this._segments = this._segmentGroup.segments;

        this._searchParams = new URL(queryString).searchParams;
        this._urlCityName = this._segmentGroup.segments[1] ? this._segmentGroup.segments[1].path : "";
        this._pageNumber = Number.parseInt(this._segmentGroup.segments[2] ? this._segmentGroup.segments[2].path : "");
    }

    /**
     * City name from url
     * */
    public get cityName(): string
    {
        return this._urlCityName;
    }

    /**
     * Current pagenumber from url
     * */
    public get pageNumber(): Number
    {
        return this._pageNumber;
    }

    /**promotionFilter param
     *
     * NewOnly | HighRate  | LowRate
     */
    public get PromotionFilterType(): string
    {
        return this._searchParams.get("promotionFilter");
    }

    /**promotionTime param
    *
    * CurrentAndFuture | Yestoday | Today | Tomorrow
    */
    public get PromotionTimeType(): string
    {
        return this._searchParams.get("promotionTime");//Selector
    }

}