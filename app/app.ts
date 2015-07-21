/// <reference path="../typings/tsd.d.ts" />

import {Component, View, bootstrap} from "angular2/angular2";
import {RouteConfig, routerInjectables, RouterOutlet, RouterLink} from "angular2/router";
import {About} from "common/directives/about";
import {Main, mainInjectables} from "common/directives/main";

@Component({
    selector: "my-app"
})
@View({
    templateUrl: "app.html",
    directives: [
        RouterOutlet,
        RouterLink
    ]
})
@RouteConfig([
    {path: "/about", component: About, as: "about"},
    {path: "/home", component: Main, as: "home"}
])
class MyAppComponent {
    constructor() {
    }
}

bootstrap(MyAppComponent, [
    mainInjectables,
    routerInjectables
]);