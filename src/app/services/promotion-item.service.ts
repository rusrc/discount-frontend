import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http'
import { PromotionItem } from "app/models/promotion-item";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import { Page } from "app/pagination-module/page";

@Injectable()
export class PromotionItemService
{

  constructor(private http: Http) { }

  async getAll(page: number = 1): Promise<Page<PromotionItem>>
  {
    return this.http.get(`http://tukifly.azurewebsites.net/api/PromotionItem?page=${page}&count=10`)
        .toPromise()
        .then((res: Response) => res.json())
        .catch((error => console.log(error)));
  }
}
