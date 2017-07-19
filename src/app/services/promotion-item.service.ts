import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';

import * as consts  from "app/constants";

import { Headers, Http, RequestOptions, Response } from '@angular/http'

import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Page } from "app/modules/pagination-module/page";
import { PromotionItem } from "app/models/promotion-item";

@Injectable()
export class PromotionItemService
{

  constructor(private http: Http) { }

  async getAllAsync(page: number = 1): Promise<Page<PromotionItem>>
  {
    return this.http.get(`${consts.ROOT_DOMAIN}/api/PromotionItem?page=${page}&count=10`)
        .toPromise()
        .then((res: Response) => res.json())
        .catch((error => console.log(error || "server error")));
  }

  getAll(page: number = 1): Observable<Page<PromotionItem>>
  {
    return this.http.get(`${consts.ROOT_DOMAIN}/api/PromotionItem?page=${page}&count=10`)
        .map((res: Response) => res.json())
        .catch((error => Observable.throw(error || "server error")));
  }
}
