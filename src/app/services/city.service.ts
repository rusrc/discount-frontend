import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import * as consts from "app/constants";
import { City } from "app/models/city";

@Injectable()
export class CityService
{

  constructor(private http: Http) { }

  async getAll(): Promise<City[]>
  {
    return Promise.resolve(consts.CITIES);
  }

}
