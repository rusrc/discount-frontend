import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http'
import { PromotionItem } from "app/models/promotion-item";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PromotionItemService {

  constructor(private http: Http) { }

  async getAll(): Promise<PromotionItem[]> {

    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });

    return this.http.get("http://tukifly.azurewebsites.net/api/PromotionItem2",
    { headers: new Headers({ 'Accept': '*/*' }) })
      .toPromise()
      .then((res: Response) => res.json())
      .catch((error => console.log(error)));

    // .map((response: Response) => response.json())
    // .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
