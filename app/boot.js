System.register(['angular2/platform/browser', "./app.component", 'ng2-material/all', 'angular2/common', 'angular2/http'], function(exports_1) {
    var browser_1, app_component_1, all_1, common_1, http_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            //noinspection TypeScriptValidateTypes
            browser_1.bootstrap(app_component_1.AppComponent, [all_1.MATERIAL_PROVIDERS, common_1.FORM_PROVIDERS, http_1.HTTP_PROVIDERS]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQSxzQ0FBc0M7WUFDdEMsbUJBQVMsQ0FBQyw0QkFBWSxFQUFFLENBQUMsd0JBQWtCLEVBQUUsdUJBQWMsRUFBRSxxQkFBYyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJib290LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7TUFURVJJQUxfUFJPVklERVJTfSBmcm9tICduZzItbWF0ZXJpYWwvYWxsJztcbmltcG9ydCB7Rk9STV9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9odHRwJztcblxuLy9ub2luc3BlY3Rpb24gVHlwZVNjcmlwdFZhbGlkYXRlVHlwZXNcbmJvb3RzdHJhcChBcHBDb21wb25lbnQsIFtNQVRFUklBTF9QUk9WSURFUlMsIEZPUk1fUFJPVklERVJTLCBIVFRQX1BST1ZJREVSU10pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
