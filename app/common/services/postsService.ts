import {Http, Inject, httpInjectables} from "angular2/angular2";

interface IPost {
    title: string;
}

export class PostsService {
    posts: Array<IPost>;

    constructor(@Inject(Http) http) {
        http.get("server/posts.json").toRx().subscribe((response) => {
            this.posts = response.json();
        });
    }
}

export var postsServiceInjectables = [
    PostsService,
    httpInjectables
];