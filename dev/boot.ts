import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app.component";
import {MATERIAL_PROVIDERS} from 'ng2-material/all';
import {FORM_PROVIDERS} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';

//noinspection TypeScriptValidateTypes
bootstrap(AppComponent, [MATERIAL_PROVIDERS, FORM_PROVIDERS, HTTP_PROVIDERS]);
