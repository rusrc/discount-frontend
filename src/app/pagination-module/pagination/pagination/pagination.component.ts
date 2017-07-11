import { Component, OnInit, Input } from '@angular/core';
import { Page } from "app/pagination-module/page";

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit
{

    constructor() { }

    ngOnInit() { }

    @Input() page: Page<any>;

    generateArray(): number[]
    {
        var arr: number[] = [];
        for (var i = this.firstPageNumber; i <= this.lastPageNumber; i++)
        {
            arr.push(i);
        }

        return arr;
    }

    get isCenter(): boolean
    {
        return this.page.PageCount - this.page.PageNumber > 5 && this.page.PageNumber > 5
    }

    get isLast(): boolean
    {
        return this.page.PageCount - this.page.PageNumber <= 5;
    }

    get firstPageNumber(): number
    {
        let pageNumber = this.isCenter ? this.page.PageNumber - 5 : (this.isLast) ? this.page.PageCount - 10 : 1;

        return this.page.PageCount <= 10 ? 1 : pageNumber;
    }

    get lastPageNumber(): number
    {
        let pageNumber = (this.isCenter) ? this.page.PageNumber + 4 : (this.isLast) ? this.page.PageCount : 10;

        return this.page.PageCount <= 10 ? this.page.PageCount : pageNumber;
    }

}
