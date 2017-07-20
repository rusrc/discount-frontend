import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-promotion-item-search-form',
    templateUrl: './promotion-item-search-form.component.html',
    styleUrls: ['./promotion-item-search-form.component.css']
})
export class PromotionItemSearchFormComponent implements OnInit
{

    constructor(private fb: FormBuilder)
    {
        this.createForm();
    }

    PromotionTimeTypeOptions = [
        "Текущие и будущие акции",
        "Акции за вчера 10 Февраля",
        "Акции за сегодня 11 Февраля",
        "Акции на завтра 12 Февраля"
    ];
    PromotionFilterTypeOptions = [];

    promotionItemSearchForm = new FormGroup({
        PromotionTimeType: new FormControl(),
        PromotionFilterType: new FormControl()
    });

    ngOnInit()
    {
    }

    createForm()
    {
        this.promotionItemSearchForm = this.fb.group({ // <-- the parent FormGroup
            name: ['', Validators.required],
            PromotionTimeType: this.fb.group({ // <-- the child FormGroup
                street: '',
                city: ''
            }),
            PromotionFilterType: this.fb.group({

            })

        });
    }

}
