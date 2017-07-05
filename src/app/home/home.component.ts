import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from "@angular/router";
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    let city = this.activeRoute.snapshot.firstChild
    ? this.activeRoute.snapshot.firstChild.url[0].path
    : "";

    console.log("Path from root", city);

    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     console.log(event.url);
    //   }
    // });
  }

}
