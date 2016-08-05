import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { AppComponent, environment } from './app/';
import { APP_ROUTES_PROVIDERS } from './app/app.routes';
import { ShoppingListService } from './app/shopping-list';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  APP_ROUTES_PROVIDERS,
  ShoppingListService
]);
