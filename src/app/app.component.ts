import { Component, OnInit } from '@angular/core';
import { CITIES } from "app/constants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{

  cities: Array<{ Name: string, Alias: string }> = CITIES;
  title = 'app';

}
