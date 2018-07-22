import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {enableProdMode} from "@angular/core";
import {AppModule} from "./app.module";

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    // tslint:disable-next-line:no-console
    .catch(console.log);