/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, NgFor} from "angular2/angular2";
import {PostsService} from "common/services/postsService";

@Component({
    selector: "my-app",
    appInjector: [
        PostsService
    ]
})
@View({
    templateUrl: "app.html",
    directives: [NgFor]
})
// Component controller
class MyAppComponent {
    postsService: PostsService;

    constructor(postsService: PostsService) {
        this.postsService = postsService;
    }
}

bootstrap(MyAppComponent);