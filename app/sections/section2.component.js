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
    var SectionTwo;
    function debounce(fn, delay) {
        var timer = null;
        return function () {
            var context = this, args = arguments;
            clearTimeout(timer);
            timer = setTimeout(function () {
                fn.apply(context, args);
            }, delay);
        };
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SectionTwo = (function () {
                function SectionTwo() {
                    this.name = 'Spencer';
                    this.nameCheck = false;
                    this.placeholder = 'placeholder';
                }
                SectionTwo.prototype.convert = function (elem) {
                    this.nameCheck = elem.toLocaleLowerCase() === 'yes';
                    return this.nameCheck;
                };
                SectionTwo.prototype.checkVariable = function () {
                };
                SectionTwo.prototype.debounce = function (fn, delay) {
                    var timer = null;
                    return function () {
                        var context = this, args = arguments;
                        clearTimeout(timer);
                        timer = setTimeout(function () {
                            fn.apply(context, args);
                        }, delay);
                    };
                };
                SectionTwo = __decorate([
                    core_1.Component({
                        selector: 'section-two',
                        template: "\n     <p>Hi, my name is <span [class.is-awesome]=\"nameCheck\" >{{name}}</span>.</p>\n     <p>This is my first <span [style.color]=\"nameCheck === true ? 'red' : ''\">angular 2 app</span>!</p>\n     <p [ngClass]=\"{'is-awesome' : nameCheck}\">NGClass expression example</p>\n     <!-- # allows us to create a 1 way bind to the element in the dome -->\n     <input type=\"text\" [value]=\"placeholder\" #inputElement (keyup)=\"convert(inputElement.value)\">\n     <br>\n     <p>Two way data binding to input: {{inputElement.value}} </p>\n     <!-- brackets put somethign in, parenthaeses pushing data out -->\n     <button [disabled]=\"!nameCheck\"> Button </button>\n    ",
                        styleUrls: ['src/css/section.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], SectionTwo);
                return SectionTwo;
            })();
            exports_1("SectionTwo", SectionTwo);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb25zL3NlY3Rpb24yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJkZWJvdW5jZSIsIlNlY3Rpb25Ud28iLCJTZWN0aW9uVHdvLmNvbnN0cnVjdG9yIiwiU2VjdGlvblR3by5jb252ZXJ0IiwiU2VjdGlvblR3by5jaGVja1ZhcmlhYmxlIiwiU2VjdGlvblR3by5kZWJvdW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBRUEsa0JBQWtCLEVBQUUsRUFBRSxLQUFLO1FBQ3ZCQSxJQUFJQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUNqQkEsTUFBTUEsQ0FBQ0E7WUFDSCxJQUFJLE9BQU8sR0FBRyxJQUFJLEVBQUUsSUFBSSxHQUFHLFNBQVMsQ0FBQztZQUNyQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEIsS0FBSyxHQUFHLFVBQVUsQ0FBQztnQkFDZixFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM1QixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDZCxDQUFDLENBQUNBO0lBQ05BLENBQUNBOzs7Ozs7O1lBRUQ7Z0JBcUJJQztvQkFDSUMsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsU0FBU0EsQ0FBQ0E7b0JBQ3RCQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxLQUFLQSxDQUFDQTtvQkFDdkJBLElBQUlBLENBQUNBLFdBQVdBLEdBQUdBLGFBQWFBLENBQUNBO2dCQUNyQ0EsQ0FBQ0E7Z0JBQ0RELDRCQUFPQSxHQUFQQSxVQUFRQSxJQUFZQTtvQkFDaEJFLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLElBQUlBLENBQUNBLGlCQUFpQkEsRUFBRUEsS0FBS0EsS0FBS0EsQ0FBQ0E7b0JBQ3BEQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQTtnQkFDMUJBLENBQUNBO2dCQUNERixrQ0FBYUEsR0FBYkE7Z0JBQ0FHLENBQUNBO2dCQUNESCw2QkFBUUEsR0FBUkEsVUFBU0EsRUFBRUEsRUFBRUEsS0FBS0E7b0JBQ2RJLElBQUlBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBO29CQUNqQkEsTUFBTUEsQ0FBQ0E7d0JBQ0gsSUFBSSxPQUFPLEdBQUcsSUFBSSxFQUFFLElBQUksR0FBRyxTQUFTLENBQUM7d0JBQ3JDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDcEIsS0FBSyxHQUFHLFVBQVUsQ0FBQzs0QkFDZixFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDNUIsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUNkLENBQUMsQ0FBQ0E7Z0JBQ05BLENBQUNBO2dCQXpDTEo7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsYUFBYUE7d0JBQ3ZCQSxRQUFRQSxFQUFFQSxrcUJBVVRBO3dCQUNEQSxTQUFTQSxFQUFFQSxDQUFDQSxxQkFBcUJBLENBQUNBO3FCQUNyQ0EsQ0FBQ0E7OytCQTRCREE7Z0JBQURBLGlCQUFDQTtZQUFEQSxDQTFDQSxBQTBDQ0EsSUFBQTtZQTFDRCxtQ0EwQ0MsQ0FBQSIsImZpbGUiOiJzZWN0aW9ucy9zZWN0aW9uMi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuZnVuY3Rpb24gZGVib3VuY2UoZm4sIGRlbGF5KSB7XG4gICAgdmFyIHRpbWVyID0gbnVsbDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgfSwgZGVsYXkpO1xuICAgIH07XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2VjdGlvbi10d28nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgIDxwPkhpLCBteSBuYW1lIGlzIDxzcGFuIFtjbGFzcy5pcy1hd2Vzb21lXT1cIm5hbWVDaGVja1wiID57e25hbWV9fTwvc3Bhbj4uPC9wPlxuICAgICA8cD5UaGlzIGlzIG15IGZpcnN0IDxzcGFuIFtzdHlsZS5jb2xvcl09XCJuYW1lQ2hlY2sgPT09IHRydWUgPyAncmVkJyA6ICcnXCI+YW5ndWxhciAyIGFwcDwvc3Bhbj4hPC9wPlxuICAgICA8cCBbbmdDbGFzc109XCJ7J2lzLWF3ZXNvbWUnIDogbmFtZUNoZWNrfVwiPk5HQ2xhc3MgZXhwcmVzc2lvbiBleGFtcGxlPC9wPlxuICAgICA8IS0tICMgYWxsb3dzIHVzIHRvIGNyZWF0ZSBhIDEgd2F5IGJpbmQgdG8gdGhlIGVsZW1lbnQgaW4gdGhlIGRvbWUgLS0+XG4gICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFt2YWx1ZV09XCJwbGFjZWhvbGRlclwiICNpbnB1dEVsZW1lbnQgKGtleXVwKT1cImNvbnZlcnQoaW5wdXRFbGVtZW50LnZhbHVlKVwiPlxuICAgICA8YnI+XG4gICAgIDxwPlR3byB3YXkgZGF0YSBiaW5kaW5nIHRvIGlucHV0OiB7e2lucHV0RWxlbWVudC52YWx1ZX19IDwvcD5cbiAgICAgPCEtLSBicmFja2V0cyBwdXQgc29tZXRoaWduIGluLCBwYXJlbnRoYWVzZXMgcHVzaGluZyBkYXRhIG91dCAtLT5cbiAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiIW5hbWVDaGVja1wiPiBCdXR0b24gPC9idXR0b24+XG4gICAgYCxcbiAgICBzdHlsZVVybHM6IFsnc3JjL2Nzcy9zZWN0aW9uLmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgU2VjdGlvblR3b3tcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgbmFtZUNoZWNrOiBib29sZWFuO1xuICAgIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLm5hbWUgPSAnU3BlbmNlcic7XG4gICAgICAgIHRoaXMubmFtZUNoZWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSAncGxhY2Vob2xkZXInO1xuICAgIH1cbiAgICBjb252ZXJ0KGVsZW06IHN0cmluZyk6IGJvb2xlYW57XG4gICAgICAgIHRoaXMubmFtZUNoZWNrID0gZWxlbS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSAneWVzJztcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZUNoZWNrO1xuICAgIH1cbiAgICBjaGVja1ZhcmlhYmxlKCk6IHZvaWR7XG4gICAgfVxuICAgIGRlYm91bmNlKGZuLCBkZWxheSkge1xuICAgICAgICB2YXIgdGltZXIgPSBudWxsO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZm4uYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgIH07XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
