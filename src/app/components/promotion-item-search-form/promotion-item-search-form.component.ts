import * as fromPromotionItemAction from 'app/_redux/reducers/promotionItemReducer';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from "rxjs/Observable";
import { PromotionItemQueryFilter } from './../../models/promotion-item-query-filter';
import { State as RootState } from "app/_redux/reducers";
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-promotion-item-search-form',
    templateUrl: './promotion-item-search-form.component.html',
    styleUrls: [ './promotion-item-search-form.component.css' ]
})
export class PromotionItemSearchFormComponent implements OnInit
{
    promotionItemState$: Observable<fromPromotionItemAction.promotionItemState>;
    @Input() searchParams: PromotionItemQueryFilter;

    PromotionTimeTypeOptions = [
        { Name: "", Value: "" },
        { Name: "Текущие и будущие акции", Value: "CurrentAndFuture" },
        { Name: "Акции за вчера 10 Февраля", Value: "Yestoday" },
        { Name: "Акции за сегодня 11 Февраля", Value: "Today" },
        { Name: "Акции на завтра 12 Февраля", Value: "Tomorrow" }
    ];

    PromotionFilterTypeOptions = [
        { Name: "", Value: "" },
        { Name: "Только новые", Value: "NewOnly" },
        { Name: "Высокий рейтинг", Value: "HighRate" },
        { Name: "Низкий рейтинг", Value: "LowRate" },
    ];

    searchForm = new FormGroup({
        PromotionTimeType: new FormControl(),
        PromotionFilterType: new FormControl()
    });

    constructor
        (
        private fb: FormBuilder,
        private store: Store<RootState>,
        private router: Router
        )
    {
        this.createForm();
        this.promotionItemState$ = store.select(state => state.promotionItemState);
    }

    ngOnInit()
    {
    }

    onSubmit()
    {
        console.log(
            this.searchForm.get("PromotionTimeType").value,
            this.searchForm.get("PromotionFilterType").value,
        this.searchParams.cityName, this.searchParams.pageNumber);

        this.router.navigateByUrl('/Home/AllCities'); //{ PromotionTimeType: "test", PromotionFilterType: "test2" }
        this.store.dispatch({ type: "PROMOTION_ITEM_REQUEST" });
    }

    createForm()
    {
        this.searchForm = this.fb.group({
            PromotionTimeType: "", //[ "test3", Validators.required ]
            PromotionFilterType: ""
        });
    }

}
