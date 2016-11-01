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
    var InputComponent;
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
            InputComponent = (function () {
                function InputComponent() {
                    this.submitted = new core_1.EventEmitter();
                    this.mySelf = {
                        name: '',
                        age: ''
                    };
                    this.isFilled = false;
                    this.isValid = false;
                }
                InputComponent.prototype.onKeyup = function () {
                    //check if filled
                    this.checkText();
                    //validate
                    this.validate();
                };
                InputComponent.prototype.checkText = function () {
                    if (this.mySelf.name != '' && this.mySelf.name != '') {
                        this.isFilled = true;
                    }
                    else {
                        this.isFilled = false;
                    }
                };
                InputComponent.prototype.validate = function () {
                    if (this.mySelf.name != '' && /^\d+$/.test(this.mySelf.age)) {
                        this.isValid = true;
                    }
                    else {
                        this.isValid = false;
                    }
                };
                InputComponent.prototype.onSubmit = function () {
                    //onSubmit output the myself object
                    this.submitted.emit(this.mySelf);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], InputComponent.prototype, "submitted", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], InputComponent.prototype, "mySelf", void 0);
                InputComponent = __decorate([
                    core_1.Component({
                        selector: 'my-input',
                        directives: [all_1.MATERIAL_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        template: "\n    <div layout=\"column\" class=\"md-inline-form\">\n        <md-toolbar class=\"demo-toolbar md-primary\">\n            <div class=\"md-toolbar-tools\">\n              <h3>Enter your information, please.</h3>\n              <span flex=\"\"></span>\n            </div>\n        </md-toolbar>\n        <md-content layout-padding>\n            <div class=\"section1\">\n              <form name=\"userForm\">\n                <div layout-gt-sm=\"row\">\n                  <md-input-container class=\"md-block\" flex-gt-sm>\n                    <label>Title</label>\n                    <input md-input type=\"text\" [(value)]=\"mySelf.name\" (keyup)=\"onKeyup()\">\n                  </md-input-container>\n                  <md-input-container class=\"md-block\" flex-gt-sm>\n                    <label>Age</label>\n                    <input md-input type=\"text\" [(value)]=\"mySelf.age\" (keyup)=\"onKeyup()\">\n                </md-input-container>\n                </div>\n              </form>\n              <p>\n                Filled out: {{isFilled ? 'Yes' : 'No'}}\n                <br>\n                Valid: {{isValid ? 'Yes' : 'No'}}\n                </p>\n                <button\n                md-raised-button\n                [disabled]=\"!isValid\"\n                class=\"md-raised md-primary\"\n                (click)=\"onSubmit()\">Submit</button>\n            </div>\n        </md-content>\n</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], InputComponent);
                return InputComponent;
            })();
            exports_1("InputComponent", InputComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJJbnB1dENvbXBvbmVudCIsIklucHV0Q29tcG9uZW50LmNvbnN0cnVjdG9yIiwiSW5wdXRDb21wb25lbnQub25LZXl1cCIsIklucHV0Q29tcG9uZW50LmNoZWNrVGV4dCIsIklucHV0Q29tcG9uZW50LnZhbGlkYXRlIiwiSW5wdXRDb21wb25lbnQub25TdWJtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQW9ESUE7b0JBTFVDLGNBQVNBLEdBQUdBLElBQUlBLG1CQUFZQSxFQUFhQSxDQUFDQTtvQkFNaERBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBO3dCQUNWQSxJQUFJQSxFQUFFQSxFQUFFQTt3QkFDUkEsR0FBR0EsRUFBRUEsRUFBRUE7cUJBQ1ZBLENBQUNBO29CQUNGQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxLQUFLQSxDQUFDQTtvQkFDdEJBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBO2dCQUV6QkEsQ0FBQ0E7Z0JBQ0RELGdDQUFPQSxHQUFQQTtvQkFFSUUsaUJBQWlCQTtvQkFDakJBLElBQUlBLENBQUNBLFNBQVNBLEVBQUVBLENBQUNBO29CQUVqQkEsVUFBVUE7b0JBQ1ZBLElBQUlBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBO2dCQUVwQkEsQ0FBQ0E7Z0JBQ0RGLGtDQUFTQSxHQUFUQTtvQkFDSUcsRUFBRUEsQ0FBQUEsQ0FBRUEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsSUFBSUEsRUFBRUEsSUFBSUEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsSUFBSUEsRUFBRUEsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7d0JBQ2xEQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQTtvQkFDekJBLENBQUNBO29CQUFBQSxJQUFJQSxDQUFBQSxDQUFDQTt3QkFDRkEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsS0FBS0EsQ0FBQ0E7b0JBQzFCQSxDQUFDQTtnQkFDTEEsQ0FBQ0E7Z0JBQ0RILGlDQUFRQSxHQUFSQTtvQkFDSUksRUFBRUEsQ0FBQUEsQ0FBRUEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsSUFBSUEsRUFBRUEsSUFBSUEsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7d0JBQ3pEQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQTtvQkFDeEJBLENBQUNBO29CQUFBQSxJQUFJQSxDQUFBQSxDQUFDQTt3QkFDRkEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsS0FBS0EsQ0FBQ0E7b0JBQ3pCQSxDQUFDQTtnQkFDTEEsQ0FBQ0E7Z0JBQ0RKLGlDQUFRQSxHQUFSQTtvQkFDSUssbUNBQW1DQTtvQkFDbkNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO2dCQUNyQ0EsQ0FBQ0E7Z0JBeENETDtvQkFBQ0EsYUFBTUEsRUFBRUE7O21CQUFDQSxxQ0FBU0EsVUFBaUNBO2dCQUdwREE7b0JBQUNBLFlBQUtBLEVBQUVBOzttQkFBQ0Esa0NBQU1BLFVBQUNBO2dCQWxEcEJBO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLFVBQVVBO3dCQUNwQkEsVUFBVUEsRUFBRUEsQ0FBQ0EseUJBQW1CQSxFQUFFQSx3QkFBZUEsQ0FBQ0E7d0JBQ2xEQSxRQUFRQSxFQUFDQSwyNUNBbUNSQTtxQkFDSkEsQ0FBQ0E7O21DQWtEREE7Z0JBQURBLHFCQUFDQTtZQUFEQSxDQXpGQSxBQXlGQ0EsSUFBQTtZQXpGRCwyQ0F5RkMsQ0FBQSIsImZpbGUiOiJiaW5kaW5ncy9pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIElucHV0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtEYXRhTW9kZWx9IGZyb20gXCIuLi9tb2RlbC9kYXRhLW1vZGVsXCI7XG5pbXBvcnQge01BVEVSSUFMX0RJUkVDVElWRVN9IGZyb20gJ25nMi1tYXRlcmlhbC9hbGwnO1xuaW1wb3J0IHtGT1JNX0RJUkVDVElWRVMsIFZhbGlkYXRvcnN9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQge0RhdGFNb2RlbH0gZnJvbSBcIi4uL21vZGVsL2RhdGEtbW9kZWxcIjtcblxuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktaW5wdXQnLFxuICAgIGRpcmVjdGl2ZXM6IFtNQVRFUklBTF9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVNdLFxuICAgIHRlbXBsYXRlOmBcbiAgICA8ZGl2IGxheW91dD1cImNvbHVtblwiIGNsYXNzPVwibWQtaW5saW5lLWZvcm1cIj5cbiAgICAgICAgPG1kLXRvb2xiYXIgY2xhc3M9XCJkZW1vLXRvb2xiYXIgbWQtcHJpbWFyeVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kLXRvb2xiYXItdG9vbHNcIj5cbiAgICAgICAgICAgICAgPGgzPkVudGVyIHlvdXIgaW5mb3JtYXRpb24sIHBsZWFzZS48L2gzPlxuICAgICAgICAgICAgICA8c3BhbiBmbGV4PVwiXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWQtdG9vbGJhcj5cbiAgICAgICAgPG1kLWNvbnRlbnQgbGF5b3V0LXBhZGRpbmc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbjFcIj5cbiAgICAgICAgICAgICAgPGZvcm0gbmFtZT1cInVzZXJGb3JtXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBsYXlvdXQtZ3Qtc209XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXIgY2xhc3M9XCJtZC1ibG9ja1wiIGZsZXgtZ3Qtc20+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5UaXRsZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBtZC1pbnB1dCB0eXBlPVwidGV4dFwiIFsodmFsdWUpXT1cIm15U2VsZi5uYW1lXCIgKGtleXVwKT1cIm9uS2V5dXAoKVwiPlxuICAgICAgICAgICAgICAgICAgPC9tZC1pbnB1dC1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwibWQtYmxvY2tcIiBmbGV4LWd0LXNtPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QWdlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1kLWlucHV0IHR5cGU9XCJ0ZXh0XCIgWyh2YWx1ZSldPVwibXlTZWxmLmFnZVwiIChrZXl1cCk9XCJvbktleXVwKClcIj5cbiAgICAgICAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBGaWxsZWQgb3V0OiB7e2lzRmlsbGVkID8gJ1llcycgOiAnTm8nfX1cbiAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgVmFsaWQ6IHt7aXNWYWxpZCA/ICdZZXMnIDogJ05vJ319XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBtZC1yYWlzZWQtYnV0dG9uXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiFpc1ZhbGlkXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwib25TdWJtaXQoKVwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWQtY29udGVudD5cbjwvZGl2PlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBJbnB1dENvbXBvbmVudHtcblxuICAgIG15U2VsZjogRGF0YU1vZGVsO1xuICAgIGlzRmlsbGVkOiBib29sZWFuO1xuICAgIGlzVmFsaWQ6IGJvb2xlYW47XG5cbiAgICBAT3V0cHV0KCkgc3VibWl0dGVkID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRhTW9kZWw+KCk7XG5cbiAgICAvL2lucHV0IGJpbmRzIHRvIHRoZSBteXNlbGYgcHJvcGVydHlcbiAgICBASW5wdXQoKSBteVNlbGY7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLm15U2VsZiA9IHtcbiAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgYWdlOiAnJ1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmlzRmlsbGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNWYWxpZCA9IGZhbHNlO1xuXG4gICAgfVxuICAgIG9uS2V5dXAoKTp2b2lkXG4gICAge1xuICAgICAgICAvL2NoZWNrIGlmIGZpbGxlZFxuICAgICAgICB0aGlzLmNoZWNrVGV4dCgpO1xuXG4gICAgICAgIC8vdmFsaWRhdGVcbiAgICAgICAgdGhpcy52YWxpZGF0ZSgpO1xuXG4gICAgfVxuICAgIGNoZWNrVGV4dCgpOiB2b2lke1xuICAgICAgICBpZiggdGhpcy5teVNlbGYubmFtZSAhPSAnJyAmJiB0aGlzLm15U2VsZi5uYW1lICE9ICcnKXtcbiAgICAgICAgICAgIHRoaXMuaXNGaWxsZWQgPSB0cnVlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuaXNGaWxsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YWxpZGF0ZSgpOiAgdm9pZHtcbiAgICAgICAgaWYoIHRoaXMubXlTZWxmLm5hbWUgIT0gJycgJiYgL15cXGQrJC8udGVzdCh0aGlzLm15U2VsZi5hZ2UpKXtcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRydWU7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25TdWJtaXQoKTogdm9pZHtcbiAgICAgICAgLy9vblN1Ym1pdCBvdXRwdXQgdGhlIG15c2VsZiBvYmplY3RcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQuZW1pdCh0aGlzLm15U2VsZik7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
