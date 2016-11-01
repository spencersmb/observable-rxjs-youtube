import {Component, EventEmitter} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {FORM_PROVIDERS, FormBuilder, Validators} from 'angular2/common';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
    selector: 'my-app',
    template: `

        <section class="app-content" flex="" layout="column" layout-align="start center">
        <h1>Puzzle App</h1>
        <button (click)="obsvFunction()">Observable by event Emitter</button>
        <button (click)="increment()">Increment</button>
        <p> Seconds: {{seconds | async}} </p>

        <md-content class="examples" layout-padding="" md-scroll-y="">
           <h3>Angular 2 Observables Demo</h3>

        <form [ngFormModel]="searchForm">
            <label for="search">Search YouTube</label><br />
            <input ngControl="search" id="search" />
        </form>

        <div *ngFor="#result of results$ | async"> <!-- Observable templates/pipes -->
          <a href="https://www.youtube.com/watch?v={{result.id.videoId}}" target="_blank">
            <h3>{{result.snippet.title}}</h3>
          </a>
          <p>{{result.snippet.description}}</p>
          <img [src]="result.snippet.thumbnails.default.url" style="width: 100%; max-width: 250px;" />
        </div>
        </md-content>
    `,
})

export class AppComponent {
    searchForm: any;
    results$: Observable<any>;
    seconds: Observable<any>;
    private _sendMessage = new EventEmitter<any>();
    increment: any;
    count:number = 0;
    //seconds:any = new Observable(observer => {
    //    setInterval(() => { observer.next(this.count++); }, 1000);
    //});

    constructor(private _formBuilder: FormBuilder, private _http: Http) {
        const API_URL = 'https://www.googleapis.com/youtube/v3/search';
        const API_KEY = 'AIzaSyAflVJswwNM_Y5EX-hZxVWrTnjhaPoY_v8';

        //Observable click
        //this.seconds = new Observable(observer => {
        //    this.increment = () => { observer.next(this.count++); };
        //});

        const test = new Observable(observer => {
            this.increment = () => { observer.next(); };
        });

        //merge here if you want
        //const intent = test.map((item) => +1);

        this.seconds = test.map(item => {console.log('click')});

        //const incrementClick$ = Observable.create(observer => {
        //    this.increment = () => { observer.next(); };
        //});
        //const decrementClick$ = Observable.create(observer => {
        //    this.decrement = () => { observer.next(); };
        //});
        //
        //const intent$ = Observable.merge(
        //    decrementClick$.map(() => -1),
        //    incrementClick$.map(() => +1)
        //);
        //
        //this.count = intent$
        //    .startWith(0)
        //    .scan((currentCount, value) => currentCount + value);



        this.searchForm = this._formBuilder.group({
        'search': ['', Validators.required]
    });

        //FOrms are observables so we targer the search control and subscribe to the valueChanges method
        this.results$ = this.searchForm.controls.search.valueChanges // <- Observable Form
            //throttle event
            .debounceTime(500)
            //similar to map but we call the http service it returns an observable. So we will have an observable of observables
            //as the user types a new value, it stops current api call and starts a new one after typing.
            .switchMap(query => this._http.get(`${API_URL}?q=${query}&key=${API_KEY}&part=snippet`))  // <-- Observable Http
            //convert each result to json
            .map(res => res.json())
            //map over and return just items?
            .map(res => res.items);
    }
    ngOnInit(){
        this.wathcMessage()
            .subscribe((item) => {
                console.log('watched');
                console.log(item);
            })
    }
    obsvFunction(){
        this._sendMessage.emit('observer');
    }
    wathcMessage(): EventEmitter<any> {
        return this._sendMessage;
    }
}
