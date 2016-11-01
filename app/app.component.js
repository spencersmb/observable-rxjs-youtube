System.register(['angular2/core', 'angular2/common', 'angular2/http', 'rxjs/Observable', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, http_1, Observable_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            AppComponent = (function () {
                //seconds:any = new Observable(observer => {
                //    setInterval(() => { observer.next(this.count++); }, 1000);
                //});
                function AppComponent(_formBuilder, _http) {
                    var _this = this;
                    this._formBuilder = _formBuilder;
                    this._http = _http;
                    this._sendMessage = new core_1.EventEmitter();
                    this.count = 0;
                    var API_URL = 'https://www.googleapis.com/youtube/v3/search';
                    var API_KEY = 'AIzaSyAflVJswwNM_Y5EX-hZxVWrTnjhaPoY_v8';
                    //Observable click
                    //this.seconds = new Observable(observer => {
                    //    this.increment = () => { observer.next(this.count++); };
                    //});
                    var test = new Observable_1.Observable(function (observer) {
                        _this.increment = function () { observer.next(); };
                    });
                    //merge here if you want
                    //const intent = test.map((item) => +1);
                    this.seconds = test.map(function (item) { console.log('click'); });
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
                        'search': ['', common_1.Validators.required]
                    });
                    //FOrms are observables so we targer the search control and subscribe to the valueChanges method
                    this.results$ = this.searchForm.controls.search.valueChanges // <- Observable Form
                        .debounceTime(500)
                        .switchMap(function (query) { return _this._http.get(API_URL + "?q=" + query + "&key=" + API_KEY + "&part=snippet"); }) // <-- Observable Http
                        .map(function (res) { return res.json(); })
                        .map(function (res) { return res.items; });
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.wathcMessage()
                        .subscribe(function (item) {
                        console.log('watched');
                        console.log(item);
                    });
                };
                AppComponent.prototype.obsvFunction = function () {
                    this._sendMessage.emit('observer');
                };
                AppComponent.prototype.wathcMessage = function () {
                    return this._sendMessage;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\n        <section class=\"app-content\" flex=\"\" layout=\"column\" layout-align=\"start center\">\n        <h1>Puzzle App</h1>\n        <button (click)=\"obsvFunction()\">Observable by event Emitter</button>\n        <button (click)=\"increment()\">Increment</button>\n        <p> Seconds: {{seconds | async}} </p>\n\n        <md-content class=\"examples\" layout-padding=\"\" md-scroll-y=\"\">\n           <h3>Angular 2 Observables Demo</h3>\n\n        <form [ngFormModel]=\"searchForm\">\n            <label for=\"search\">Search YouTube</label><br />\n            <input ngControl=\"search\" id=\"search\" />\n        </form>\n\n        <div *ngFor=\"#result of results$ | async\"> <!-- Observable templates/pipes -->\n          <a href=\"https://www.youtube.com/watch?v={{result.id.videoId}}\" target=\"_blank\">\n            <h3>{{result.snippet.title}}</h3>\n          </a>\n          <p>{{result.snippet.description}}</p>\n          <img [src]=\"result.snippet.thumbnails.default.url\" style=\"width: 100%; max-width: 250px;\" />\n        </div>\n        </md-content>\n    ",
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, http_1.Http])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQXBwQ29tcG9uZW50Lm5nT25Jbml0IiwiQXBwQ29tcG9uZW50Lm9ic3ZGdW5jdGlvbiIsIkFwcENvbXBvbmVudC53YXRoY01lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFvQ0lBLDRDQUE0Q0E7Z0JBQzVDQSxnRUFBZ0VBO2dCQUNoRUEsS0FBS0E7Z0JBRUxBLHNCQUFvQkEsWUFBeUJBLEVBQVVBLEtBQVdBO29CQXhDdEVDLGlCQXlHQ0E7b0JBakV1QkEsaUJBQVlBLEdBQVpBLFlBQVlBLENBQWFBO29CQUFVQSxVQUFLQSxHQUFMQSxLQUFLQSxDQUFNQTtvQkFQMURBLGlCQUFZQSxHQUFHQSxJQUFJQSxtQkFBWUEsRUFBT0EsQ0FBQ0E7b0JBRS9DQSxVQUFLQSxHQUFVQSxDQUFDQSxDQUFDQTtvQkFNYkEsSUFBTUEsT0FBT0EsR0FBR0EsOENBQThDQSxDQUFDQTtvQkFDL0RBLElBQU1BLE9BQU9BLEdBQUdBLHlDQUF5Q0EsQ0FBQ0E7b0JBRTFEQSxrQkFBa0JBO29CQUNsQkEsNkNBQTZDQTtvQkFDN0NBLDhEQUE4REE7b0JBQzlEQSxLQUFLQTtvQkFFTEEsSUFBTUEsSUFBSUEsR0FBR0EsSUFBSUEsdUJBQVVBLENBQUNBLFVBQUFBLFFBQVFBO3dCQUNoQ0EsS0FBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsY0FBUUEsUUFBUUEsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ2hEQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFFSEEsd0JBQXdCQTtvQkFDeEJBLHdDQUF3Q0E7b0JBRXhDQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxVQUFBQSxJQUFJQSxJQUFLQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFBQSxDQUFBQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFFeERBLHlEQUF5REE7b0JBQ3pEQSxrREFBa0RBO29CQUNsREEsS0FBS0E7b0JBQ0xBLHlEQUF5REE7b0JBQ3pEQSxrREFBa0RBO29CQUNsREEsS0FBS0E7b0JBQ0xBLEVBQUVBO29CQUNGQSxtQ0FBbUNBO29CQUNuQ0Esb0NBQW9DQTtvQkFDcENBLG1DQUFtQ0E7b0JBQ25DQSxJQUFJQTtvQkFDSkEsRUFBRUE7b0JBQ0ZBLHNCQUFzQkE7b0JBQ3RCQSxtQkFBbUJBO29CQUNuQkEsMkRBQTJEQTtvQkFJM0RBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLEtBQUtBLENBQUNBO3dCQUMxQ0EsUUFBUUEsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsbUJBQVVBLENBQUNBLFFBQVFBLENBQUNBO3FCQUN0Q0EsQ0FBQ0EsQ0FBQ0E7b0JBRUNBLGdHQUFnR0E7b0JBQ2hHQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxRQUFRQSxDQUFDQSxNQUFNQSxDQUFDQSxZQUFZQSxDQUFDQSxxQkFBcUJBO3lCQUU3RUEsWUFBWUEsQ0FBQ0EsR0FBR0EsQ0FBQ0E7eUJBR2pCQSxTQUFTQSxDQUFDQSxVQUFBQSxLQUFLQSxJQUFJQSxPQUFBQSxLQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFJQSxPQUFPQSxXQUFNQSxLQUFLQSxhQUFRQSxPQUFPQSxrQkFBZUEsQ0FBQ0EsRUFBbkVBLENBQW1FQSxDQUFDQSxDQUFFQSxzQkFBc0JBO3lCQUUvR0EsR0FBR0EsQ0FBQ0EsVUFBQUEsR0FBR0EsSUFBSUEsT0FBQUEsR0FBR0EsQ0FBQ0EsSUFBSUEsRUFBRUEsRUFBVkEsQ0FBVUEsQ0FBQ0E7eUJBRXRCQSxHQUFHQSxDQUFDQSxVQUFBQSxHQUFHQSxJQUFJQSxPQUFBQSxHQUFHQSxDQUFDQSxLQUFLQSxFQUFUQSxDQUFTQSxDQUFDQSxDQUFDQTtnQkFDL0JBLENBQUNBO2dCQUNERCwrQkFBUUEsR0FBUkE7b0JBQ0lFLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBO3lCQUNkQSxTQUFTQSxDQUFDQSxVQUFDQSxJQUFJQTt3QkFDWkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7d0JBQ3ZCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFDdEJBLENBQUNBLENBQUNBLENBQUFBO2dCQUNWQSxDQUFDQTtnQkFDREYsbUNBQVlBLEdBQVpBO29CQUNJRyxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTtnQkFDdkNBLENBQUNBO2dCQUNESCxtQ0FBWUEsR0FBWkE7b0JBQ0lJLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBO2dCQUM3QkEsQ0FBQ0E7Z0JBeEdMSjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxRQUFRQTt3QkFDbEJBLFFBQVFBLEVBQUVBLCtqQ0F3QlRBO3FCQUNKQSxDQUFDQTs7aUNBOEVEQTtnQkFBREEsbUJBQUNBO1lBQURBLENBekdBLEFBeUdDQSxJQUFBO1lBekdELHVDQXlHQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TUFURVJJQUxfRElSRUNUSVZFU30gZnJvbSAnbmcyLW1hdGVyaWFsL2FsbCc7XG5pbXBvcnQge0ZPUk1fUFJPVklERVJTLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9yc30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7SHR0cCwgSFRUUF9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICdyeGpzL1J4JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJhcHAtY29udGVudFwiIGZsZXg9XCJcIiBsYXlvdXQ9XCJjb2x1bW5cIiBsYXlvdXQtYWxpZ249XCJzdGFydCBjZW50ZXJcIj5cbiAgICAgICAgPGgxPlB1enpsZSBBcHA8L2gxPlxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvYnN2RnVuY3Rpb24oKVwiPk9ic2VydmFibGUgYnkgZXZlbnQgRW1pdHRlcjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJpbmNyZW1lbnQoKVwiPkluY3JlbWVudDwvYnV0dG9uPlxuICAgICAgICA8cD4gU2Vjb25kczoge3tzZWNvbmRzIHwgYXN5bmN9fSA8L3A+XG5cbiAgICAgICAgPG1kLWNvbnRlbnQgY2xhc3M9XCJleGFtcGxlc1wiIGxheW91dC1wYWRkaW5nPVwiXCIgbWQtc2Nyb2xsLXk9XCJcIj5cbiAgICAgICAgICAgPGgzPkFuZ3VsYXIgMiBPYnNlcnZhYmxlcyBEZW1vPC9oMz5cblxuICAgICAgICA8Zm9ybSBbbmdGb3JtTW9kZWxdPVwic2VhcmNoRm9ybVwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInNlYXJjaFwiPlNlYXJjaCBZb3VUdWJlPC9sYWJlbD48YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJzZWFyY2hcIiBpZD1cInNlYXJjaFwiIC8+XG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cIiNyZXN1bHQgb2YgcmVzdWx0cyQgfCBhc3luY1wiPiA8IS0tIE9ic2VydmFibGUgdGVtcGxhdGVzL3BpcGVzIC0tPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PXt7cmVzdWx0LmlkLnZpZGVvSWR9fVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgPGgzPnt7cmVzdWx0LnNuaXBwZXQudGl0bGV9fTwvaDM+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxwPnt7cmVzdWx0LnNuaXBwZXQuZGVzY3JpcHRpb259fTwvcD5cbiAgICAgICAgICA8aW1nIFtzcmNdPVwicmVzdWx0LnNuaXBwZXQudGh1bWJuYWlscy5kZWZhdWx0LnVybFwiIHN0eWxlPVwid2lkdGg6IDEwMCU7IG1heC13aWR0aDogMjUwcHg7XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWQtY29udGVudD5cbiAgICBgLFxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgc2VhcmNoRm9ybTogYW55O1xuICAgIHJlc3VsdHMkOiBPYnNlcnZhYmxlPGFueT47XG4gICAgc2Vjb25kczogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIHByaXZhdGUgX3NlbmRNZXNzYWdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgaW5jcmVtZW50OiBhbnk7XG4gICAgY291bnQ6bnVtYmVyID0gMDtcbiAgICAvL3NlY29uZHM6YW55ID0gbmV3IE9ic2VydmFibGUob2JzZXJ2ZXIgPT4ge1xuICAgIC8vICAgIHNldEludGVydmFsKCgpID0+IHsgb2JzZXJ2ZXIubmV4dCh0aGlzLmNvdW50KyspOyB9LCAxMDAwKTtcbiAgICAvL30pO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIF9odHRwOiBIdHRwKSB7XG4gICAgICAgIGNvbnN0IEFQSV9VUkwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9zZWFyY2gnO1xuICAgICAgICBjb25zdCBBUElfS0VZID0gJ0FJemFTeUFmbFZKc3d3Tk1fWTVFWC1oWnhWV3JUbmpoYVBvWV92OCc7XG5cbiAgICAgICAgLy9PYnNlcnZhYmxlIGNsaWNrXG4gICAgICAgIC8vdGhpcy5zZWNvbmRzID0gbmV3IE9ic2VydmFibGUob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAvLyAgICB0aGlzLmluY3JlbWVudCA9ICgpID0+IHsgb2JzZXJ2ZXIubmV4dCh0aGlzLmNvdW50KyspOyB9O1xuICAgICAgICAvL30pO1xuXG4gICAgICAgIGNvbnN0IHRlc3QgPSBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICB0aGlzLmluY3JlbWVudCA9ICgpID0+IHsgb2JzZXJ2ZXIubmV4dCgpOyB9O1xuICAgICAgICB9KTtcblxuICAgICAgICAvL21lcmdlIGhlcmUgaWYgeW91IHdhbnRcbiAgICAgICAgLy9jb25zdCBpbnRlbnQgPSB0ZXN0Lm1hcCgoaXRlbSkgPT4gKzEpO1xuXG4gICAgICAgIHRoaXMuc2Vjb25kcyA9IHRlc3QubWFwKGl0ZW0gPT4ge2NvbnNvbGUubG9nKCdjbGljaycpfSk7XG5cbiAgICAgICAgLy9jb25zdCBpbmNyZW1lbnRDbGljayQgPSBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XG4gICAgICAgIC8vICAgIHRoaXMuaW5jcmVtZW50ID0gKCkgPT4geyBvYnNlcnZlci5uZXh0KCk7IH07XG4gICAgICAgIC8vfSk7XG4gICAgICAgIC8vY29uc3QgZGVjcmVtZW50Q2xpY2skID0gT2JzZXJ2YWJsZS5jcmVhdGUob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAvLyAgICB0aGlzLmRlY3JlbWVudCA9ICgpID0+IHsgb2JzZXJ2ZXIubmV4dCgpOyB9O1xuICAgICAgICAvL30pO1xuICAgICAgICAvL1xuICAgICAgICAvL2NvbnN0IGludGVudCQgPSBPYnNlcnZhYmxlLm1lcmdlKFxuICAgICAgICAvLyAgICBkZWNyZW1lbnRDbGljayQubWFwKCgpID0+IC0xKSxcbiAgICAgICAgLy8gICAgaW5jcmVtZW50Q2xpY2skLm1hcCgoKSA9PiArMSlcbiAgICAgICAgLy8pO1xuICAgICAgICAvL1xuICAgICAgICAvL3RoaXMuY291bnQgPSBpbnRlbnQkXG4gICAgICAgIC8vICAgIC5zdGFydFdpdGgoMClcbiAgICAgICAgLy8gICAgLnNjYW4oKGN1cnJlbnRDb3VudCwgdmFsdWUpID0+IGN1cnJlbnRDb3VudCArIHZhbHVlKTtcblxuXG5cbiAgICAgICAgdGhpcy5zZWFyY2hGb3JtID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAnc2VhcmNoJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuXG4gICAgICAgIC8vRk9ybXMgYXJlIG9ic2VydmFibGVzIHNvIHdlIHRhcmdlciB0aGUgc2VhcmNoIGNvbnRyb2wgYW5kIHN1YnNjcmliZSB0byB0aGUgdmFsdWVDaGFuZ2VzIG1ldGhvZFxuICAgICAgICB0aGlzLnJlc3VsdHMkID0gdGhpcy5zZWFyY2hGb3JtLmNvbnRyb2xzLnNlYXJjaC52YWx1ZUNoYW5nZXMgLy8gPC0gT2JzZXJ2YWJsZSBGb3JtXG4gICAgICAgICAgICAvL3Rocm90dGxlIGV2ZW50XG4gICAgICAgICAgICAuZGVib3VuY2VUaW1lKDUwMClcbiAgICAgICAgICAgIC8vc2ltaWxhciB0byBtYXAgYnV0IHdlIGNhbGwgdGhlIGh0dHAgc2VydmljZSBpdCByZXR1cm5zIGFuIG9ic2VydmFibGUuIFNvIHdlIHdpbGwgaGF2ZSBhbiBvYnNlcnZhYmxlIG9mIG9ic2VydmFibGVzXG4gICAgICAgICAgICAvL2FzIHRoZSB1c2VyIHR5cGVzIGEgbmV3IHZhbHVlLCBpdCBzdG9wcyBjdXJyZW50IGFwaSBjYWxsIGFuZCBzdGFydHMgYSBuZXcgb25lIGFmdGVyIHR5cGluZy5cbiAgICAgICAgICAgIC5zd2l0Y2hNYXAocXVlcnkgPT4gdGhpcy5faHR0cC5nZXQoYCR7QVBJX1VSTH0/cT0ke3F1ZXJ5fSZrZXk9JHtBUElfS0VZfSZwYXJ0PXNuaXBwZXRgKSkgIC8vIDwtLSBPYnNlcnZhYmxlIEh0dHBcbiAgICAgICAgICAgIC8vY29udmVydCBlYWNoIHJlc3VsdCB0byBqc29uXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLy9tYXAgb3ZlciBhbmQgcmV0dXJuIGp1c3QgaXRlbXM/XG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuaXRlbXMpO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLndhdGhjTWVzc2FnZSgpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3dhdGNoZWQnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuICAgIG9ic3ZGdW5jdGlvbigpe1xuICAgICAgICB0aGlzLl9zZW5kTWVzc2FnZS5lbWl0KCdvYnNlcnZlcicpO1xuICAgIH1cbiAgICB3YXRoY01lc3NhZ2UoKTogRXZlbnRFbWl0dGVyPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VuZE1lc3NhZ2U7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
