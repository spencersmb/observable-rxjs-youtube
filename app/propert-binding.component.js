System.register(["angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var PropertyBindingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PropertyBindingComponent = (function () {
                function PropertyBindingComponent() {
                    //output
                    this.hobbiesChanged = new core_1.EventEmitter();
                }
                PropertyBindingComponent.prototype.onHobbiesChanged = function (hobbies) {
                    //emit passed in value to function
                    this.hobbiesChanged.emit(hobbies);
                };
                __decorate([
                    core_1.Input('myAge'), 
                    __metadata('design:type', String)
                ], PropertyBindingComponent.prototype, "age", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PropertyBindingComponent.prototype, "myName", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], PropertyBindingComponent.prototype, "hobbiesChanged", void 0);
                PropertyBindingComponent = __decorate([
                    core_1.Component({
                        selector: 'property-binding',
                        template: "\n        <h2>Property Binding Child Component</h2>\n        <p>Data bind from parent component: </p>\n        <!-- name must match selector of input on this component -->\n        <p>{{myName}} is {{age}} years old</p>\n\n        <h4>MY Hobbies are:</h4>\n        <input #hobbies type=\"text\" (keyup)=\"onHobbiesChanged(hobbies.value)\">\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PropertyBindingComponent);
                return PropertyBindingComponent;
            })();
            exports_1("PropertyBindingComponent", PropertyBindingComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnQtYmluZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiUHJvcGVydHlCaW5kaW5nQ29tcG9uZW50IiwiUHJvcGVydHlCaW5kaW5nQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiUHJvcGVydHlCaW5kaW5nQ29tcG9uZW50Lm9uSG9iYmllc0NoYW5nZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUVBO2dCQXVCSUE7b0JBSEFDLFFBQVFBO29CQUNFQSxtQkFBY0EsR0FBR0EsSUFBSUEsbUJBQVlBLEVBQVVBLENBQUNBO2dCQUd0REEsQ0FBQ0E7Z0JBQ0RELG1EQUFnQkEsR0FBaEJBLFVBQWlCQSxPQUFlQTtvQkFDNUJFLGtDQUFrQ0E7b0JBQ2xDQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtnQkFDdENBLENBQUNBO2dCQVpERjtvQkFBQ0EsWUFBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0E7O21CQUFDQSx5Q0FBR0EsVUFBU0E7Z0JBRTVCQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFDQSw0Q0FBTUEsVUFBQ0E7Z0JBR2hCQTtvQkFBQ0EsYUFBTUEsRUFBRUE7O21CQUFDQSxvREFBY0EsVUFBOEJBO2dCQXJCMURBO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLGtCQUFrQkE7d0JBQzVCQSxRQUFRQSxFQUFDQSwyVkFRUkE7cUJBQ0pBLENBQUNBOzs2Q0FrQkRBO2dCQUFEQSwrQkFBQ0E7WUFBREEsQ0E3QkEsQUE2QkNBLElBQUE7WUE3QkQsK0RBNkJDLENBQUEiLCJmaWxlIjoicHJvcGVydC1iaW5kaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncHJvcGVydHktYmluZGluZycsXG4gICAgdGVtcGxhdGU6YFxuICAgICAgICA8aDI+UHJvcGVydHkgQmluZGluZyBDaGlsZCBDb21wb25lbnQ8L2gyPlxuICAgICAgICA8cD5EYXRhIGJpbmQgZnJvbSBwYXJlbnQgY29tcG9uZW50OiA8L3A+XG4gICAgICAgIDwhLS0gbmFtZSBtdXN0IG1hdGNoIHNlbGVjdG9yIG9mIGlucHV0IG9uIHRoaXMgY29tcG9uZW50IC0tPlxuICAgICAgICA8cD57e215TmFtZX19IGlzIHt7YWdlfX0geWVhcnMgb2xkPC9wPlxuXG4gICAgICAgIDxoND5NWSBIb2JiaWVzIGFyZTo8L2g0PlxuICAgICAgICA8aW5wdXQgI2hvYmJpZXMgdHlwZT1cInRleHRcIiAoa2V5dXApPVwib25Ib2JiaWVzQ2hhbmdlZChob2JiaWVzLnZhbHVlKVwiPlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eUJpbmRpbmdDb21wb25lbnR7XG5cbiAgICAvL0FsaWFzIGJpbmRpbmdcbiAgICBASW5wdXQoJ215QWdlJykgYWdlOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBteU5hbWU7XG5cbiAgICAvL291dHB1dFxuICAgIEBPdXRwdXQoKSBob2JiaWVzQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICB9XG4gICAgb25Ib2JiaWVzQ2hhbmdlZChob2JiaWVzOiBzdHJpbmcpOiB2b2lke1xuICAgICAgICAvL2VtaXQgcGFzc2VkIGluIHZhbHVlIHRvIGZ1bmN0aW9uXG4gICAgICAgIHRoaXMuaG9iYmllc0NoYW5nZWQuZW1pdChob2JiaWVzKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
