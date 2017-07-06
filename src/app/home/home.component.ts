import { Component, OnInit, DoCheck, AfterContentInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from "@angular/router";
import { PromotionItem } from "app/models/promotion-item";
import { PromotionItemService } from "app/services/promotion-item.service";
import { AngularMasonry, MasonryOptions } from 'angular2-masonry';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-home',
    providers: [ PromotionItemService ],
    templateUrl: './home.component.html',
    styles: [ `
    .brick { 
      width: 200px;
    }
  `]
})
export class HomeComponent implements OnInit, AfterViewInit
{
    promotionItems: PromotionItem[] = [];
    loading: string = 'loading...';
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
    )
    {

        // this.promotionItems = [
        //     new PromotionItem(),
        //     new PromotionItem()
        // ];

    }
    ngAfterViewInit()
    {
        this.masonry.layoutComplete.subscribe(() =>
        {
            console.log('layout');
        });
    }
    async ngOnInit()
    {
        let city = this.activeRoute.snapshot.firstChild
            ? this.activeRoute.snapshot.firstChild.url[ 0 ].path
            : "";

        this.promotionItems = await this.promotionItemService.getAll();
        this.loading = '';
        this.gifLoader = false;

        console.log(this.promotionItems);
        console.log("Path from root", city);

        // this.router.events.subscribe((event) => {
        //   if (event instanceof NavigationEnd) {
        //     console.log(event.url);
        //   }
        // });
    }

}
