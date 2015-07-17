/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, NgFor} from "angular2/angular2";
import {PostsService} from "common/services/postsService";
import {Http, httpInjectables} from "angular2/angular2";

@Component({
    selector: "my-app",
    appInjector: [
        PostsService,
        Http
    ]
})
@View({
    templateUrl: "app.html",
    directives: [NgFor]
})
class MyAppComponent {
    postsService: PostsService;

    constructor(postsService: PostsService, http: Http) {
        this.postsService = postsService;
        http.get("../server/posts.json");
    }
}

bootstrap(MyAppComponent, [
    PostsService,
    httpInjectables
]);