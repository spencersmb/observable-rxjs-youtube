System.register(["angular2/core", 'ng2-material/all', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, all_1, common_1;
    var confirmComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            confirmComponent = (function () {
                function confirmComponent() {
                    this.confirmed = new core_1.EventEmitter();
                    this.mySelf = {
                        name: '',
                        age: ''
                    };
                    this.confirmedMyself = {
                        name: '',
                        age: ''
                    };
                }
                confirmComponent.prototype.onKeyup = function () {
                    //check if filled
                    this.checkText();
                    //validate
                    this.validate();
                };
                confirmComponent.prototype.checkText = function () {
                    if (this.mySelf.name != '' && this.mySelf.name != '') {
                        this.isFilled = true;
                    }
                    else {
                        this.isFilled = false;
                    }
                };
                confirmComponent.prototype.validate = function () {
                    if (this.mySelf.name != '' && /^\d+$/.test(this.mySelf.age)) {
                        this.isValid = true;
                    }
                    else {
                        this.isValid = false;
                    }
                };
                confirmComponent.prototype.onConfirm = function () {
                    //onSubmit output the myself object
                    this.confirmed.emit(this.mySelf);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], confirmComponent.prototype, "confirmed", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], confirmComponent.prototype, "mySelf", void 0);
                confirmComponent = __decorate([
                    core_1.Component({
                        selector: 'confirm',
                        directives: [all_1.MATERIAL_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        template: "\n        <div layout=\"column\" class=\"md-inline-form top\">\n                <md-toolbar class=\"demo-toolbar md-primary\">\n                    <div class=\"md-toolbar-tools no-height\">\n                      <span layout=\"column\">\n                      <h3>Submitted information</h3>\n                      <p>Please confirm your name is: {{mySelf.name}} and your age is: {{mySelf.age}}</p>\n                      </span>\n                    </div>\n                </md-toolbar>\n                <md-content layout-padding>\n                    <div class=\"section1\">\n                      <form name=\"submittedForm\">\n                        <div layout-gt-sm=\"row\">\n                          <md-input-container class=\"md-block\" flex-gt-sm>\n                            <label>Title</label>\n                            <input md-input type=\"text\" [(value)]=\"mySelf.name\" (keyup)=\"onKeyup()\">\n                          </md-input-container>\n                          <md-input-container class=\"md-block\" flex-gt-sm>\n                            <label>Age</label>\n                            <input md-input type=\"text\" [(value)]=\"mySelf.age\" (keyup)=\"onKeyup()\">\n                        </md-input-container>\n                        </div>\n                      </form>\n                        <button\n                            md-raised-button\n                            [disabled]=\"!isValid\"\n                            class=\"md-raised md-primary\"\n                            (click)=\"onConfirm()\"\n                            >Confirm</button>\n                    </div>\n                </md-content>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], confirmComponent);
                return confirmComponent;
            })();
            exports_1("confirmComponent", confirmComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2NvbmZpcm1Db21wb25lbnQudHMiXSwibmFtZXMiOlsiY29uZmlybUNvbXBvbmVudCIsImNvbmZpcm1Db21wb25lbnQuY29uc3RydWN0b3IiLCJjb25maXJtQ29tcG9uZW50Lm9uS2V5dXAiLCJjb25maXJtQ29tcG9uZW50LmNoZWNrVGV4dCIsImNvbmZpcm1Db21wb25lbnQudmFsaWRhdGUiLCJjb25maXJtQ29tcG9uZW50Lm9uQ29uZmlybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBbURJQTtvQkFMVUMsY0FBU0EsR0FBR0EsSUFBSUEsbUJBQVlBLEVBQWFBLENBQUNBO29CQU1oREEsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0E7d0JBQ1ZBLElBQUlBLEVBQUVBLEVBQUVBO3dCQUNSQSxHQUFHQSxFQUFFQSxFQUFFQTtxQkFDVkEsQ0FBQ0E7b0JBQ0ZBLElBQUlBLENBQUNBLGVBQWVBLEdBQUdBO3dCQUNuQkEsSUFBSUEsRUFBRUEsRUFBRUE7d0JBQ1JBLEdBQUdBLEVBQUVBLEVBQUVBO3FCQUNWQSxDQUFBQTtnQkFDTEEsQ0FBQ0E7Z0JBQ0RELGtDQUFPQSxHQUFQQTtvQkFFSUUsaUJBQWlCQTtvQkFDakJBLElBQUlBLENBQUNBLFNBQVNBLEVBQUVBLENBQUNBO29CQUVqQkEsVUFBVUE7b0JBQ1ZBLElBQUlBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBO2dCQUVwQkEsQ0FBQ0E7Z0JBQ0RGLG9DQUFTQSxHQUFUQTtvQkFDSUcsRUFBRUEsQ0FBQUEsQ0FBRUEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsSUFBSUEsRUFBRUEsSUFBSUEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsSUFBSUEsRUFBRUEsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7d0JBQ2xEQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQTtvQkFDekJBLENBQUNBO29CQUFBQSxJQUFJQSxDQUFBQSxDQUFDQTt3QkFDRkEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsS0FBS0EsQ0FBQ0E7b0JBQzFCQSxDQUFDQTtnQkFDTEEsQ0FBQ0E7Z0JBQ0RILG1DQUFRQSxHQUFSQTtvQkFDSUksRUFBRUEsQ0FBQUEsQ0FBRUEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsSUFBSUEsRUFBRUEsSUFBSUEsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7d0JBQ3pEQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQTtvQkFDeEJBLENBQUNBO29CQUFBQSxJQUFJQSxDQUFBQSxDQUFDQTt3QkFDRkEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsS0FBS0EsQ0FBQ0E7b0JBQ3pCQSxDQUFDQTtnQkFDTEEsQ0FBQ0E7Z0JBQ0RKLG9DQUFTQSxHQUFUQTtvQkFDSUssbUNBQW1DQTtvQkFDbkNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO2dCQUNyQ0EsQ0FBQ0E7Z0JBekNETDtvQkFBQ0EsYUFBTUEsRUFBRUE7O21CQUFDQSx1Q0FBU0EsVUFBaUNBO2dCQUdwREE7b0JBQUNBLFlBQUtBLEVBQUVBOzttQkFBQ0Esb0NBQU1BLFVBQUNBO2dCQWpEcEJBO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLFNBQVNBO3dCQUNuQkEsVUFBVUEsRUFBQ0EsQ0FBQ0EseUJBQW1CQSxFQUFFQSx3QkFBZUEsQ0FBQ0E7d0JBQ2pEQSxRQUFRQSxFQUFDQSx3cERBaUNSQTtxQkFDSkEsQ0FBQ0E7O3FDQW1EREE7Z0JBQURBLHVCQUFDQTtZQUFEQSxDQXhGQSxBQXdGQ0EsSUFBQTtZQXhGRCwrQ0F3RkMsQ0FBQSIsImZpbGUiOiJiaW5kaW5ncy9jb25maXJtQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBJbnB1dH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7TUFURVJJQUxfRElSRUNUSVZFU30gZnJvbSAnbmcyLW1hdGVyaWFsL2FsbCc7XG5pbXBvcnQge0ZPUk1fRElSRUNUSVZFUywgVmFsaWRhdG9yc30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7RGF0YU1vZGVsfSBmcm9tIFwiLi4vbW9kZWwvZGF0YS1tb2RlbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NvbmZpcm0nLFxuICAgIGRpcmVjdGl2ZXM6W01BVEVSSUFMX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFU10sXG4gICAgdGVtcGxhdGU6YFxuICAgICAgICA8ZGl2IGxheW91dD1cImNvbHVtblwiIGNsYXNzPVwibWQtaW5saW5lLWZvcm0gdG9wXCI+XG4gICAgICAgICAgICAgICAgPG1kLXRvb2xiYXIgY2xhc3M9XCJkZW1vLXRvb2xiYXIgbWQtcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWQtdG9vbGJhci10b29scyBuby1oZWlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBsYXlvdXQ9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDM+U3VibWl0dGVkIGluZm9ybWF0aW9uPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5QbGVhc2UgY29uZmlybSB5b3VyIG5hbWUgaXM6IHt7bXlTZWxmLm5hbWV9fSBhbmQgeW91ciBhZ2UgaXM6IHt7bXlTZWxmLmFnZX19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9tZC10b29sYmFyPlxuICAgICAgICAgICAgICAgIDxtZC1jb250ZW50IGxheW91dC1wYWRkaW5nPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbjFcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBuYW1lPVwic3VibWl0dGVkRm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBsYXlvdXQtZ3Qtc209XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cIm1kLWJsb2NrXCIgZmxleC1ndC1zbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VGl0bGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBtZC1pbnB1dCB0eXBlPVwidGV4dFwiIFsodmFsdWUpXT1cIm15U2VsZi5uYW1lXCIgKGtleXVwKT1cIm9uS2V5dXAoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cIm1kLWJsb2NrXCIgZmxleC1ndC1zbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QWdlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWQtaW5wdXQgdHlwZT1cInRleHRcIiBbKHZhbHVlKV09XCJteVNlbGYuYWdlXCIgKGtleXVwKT1cIm9uS2V5dXAoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tZC1pbnB1dC1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWQtcmFpc2VkLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhaXNWYWxpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZC1yYWlzZWQgbWQtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ29uZmlybSgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+Q29uZmlybTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L21kLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBjb25maXJtQ29tcG9uZW50e1xuXG4gICAgbXlTZWxmOiBEYXRhTW9kZWw7XG4gICAgY29uZmlybWVkTXlzZWxmOiBEYXRhTW9kZWw7XG4gICAgaXNGaWxsZWQ6IGJvb2xlYW47XG4gICAgaXNWYWxpZDogYm9vbGVhbjtcblxuICAgIEBPdXRwdXQoKSBjb25maXJtZWQgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGFNb2RlbD4oKTtcblxuICAgIC8vaW5wdXQgYmluZHMgdG8gdGhlIG15c2VsZiBwcm9wZXJ0eVxuICAgIEBJbnB1dCgpIG15U2VsZjtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMubXlTZWxmID0ge1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBhZ2U6ICcnXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29uZmlybWVkTXlzZWxmID0ge1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBhZ2U6ICcnXG4gICAgICAgIH1cbiAgICB9XG4gICAgb25LZXl1cCgpOnZvaWRcbiAgICB7XG4gICAgICAgIC8vY2hlY2sgaWYgZmlsbGVkXG4gICAgICAgIHRoaXMuY2hlY2tUZXh0KCk7XG5cbiAgICAgICAgLy92YWxpZGF0ZVxuICAgICAgICB0aGlzLnZhbGlkYXRlKCk7XG5cbiAgICB9XG4gICAgY2hlY2tUZXh0KCk6IHZvaWR7XG4gICAgICAgIGlmKCB0aGlzLm15U2VsZi5uYW1lICE9ICcnICYmIHRoaXMubXlTZWxmLm5hbWUgIT0gJycpe1xuICAgICAgICAgICAgdGhpcy5pc0ZpbGxlZCA9IHRydWU7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5pc0ZpbGxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhbGlkYXRlKCk6ICB2b2lke1xuICAgICAgICBpZiggdGhpcy5teVNlbGYubmFtZSAhPSAnJyAmJiAvXlxcZCskLy50ZXN0KHRoaXMubXlTZWxmLmFnZSkpe1xuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkNvbmZpcm0oKTogdm9pZHtcbiAgICAgICAgLy9vblN1Ym1pdCBvdXRwdXQgdGhlIG15c2VsZiBvYmplY3RcbiAgICAgICAgdGhpcy5jb25maXJtZWQuZW1pdCh0aGlzLm15U2VsZik7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
