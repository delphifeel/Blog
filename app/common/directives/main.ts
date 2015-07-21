import {Component, View, NgFor} from "angular2/angular2";
import {PostsService, postsServiceInjectables} from "common/services/postsService"

@Component({
    selector: "main",
    appInjector: [
        PostsService
    ]
})
@View({
    templateUrl: "common/directives/main.html",
    directives: [NgFor]
})
export class Main {
    postsService:PostsService;

    constructor(postsService:PostsService) {
        this.postsService = postsService;
    }
}

export var mainInjectables = [
    postsServiceInjectables
];