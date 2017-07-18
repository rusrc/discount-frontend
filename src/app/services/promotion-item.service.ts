import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http'
import { PromotionItem } from "app/models/promotion-item";
import { Observable } from "rxjs/Observable";
import { Page } from "app/pagination-module/page";
import 'rxjs/add/operator/toPromise';
import * as consts  from "app/constants";



@Injectable()
export class PromotionItemService
{

  constructor(private http: Http) { }

  async getAll(page: number = 1): Promise<Page<PromotionItem>>
  {
    return this.http.get(`${consts.ROOT_DOMAIN}/api/PromotionItem?page=${page}&count=10`)
        .toPromise()
        .then((res: Response) => res.json())
        .catch((error => console.log(error)));
  }

  getAll2(page: number = 1): Observable<Page<PromotionItem>>
  {
    return this.http.get(`${consts.ROOT_DOMAIN}/api/PromotionItem?page=${page}&count=10`)
        .map((res: Response) => res.json())
        .catch((error => Observable.throw(error)));
  }
}
