import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { routing } from './app.routes';
import { ShoppingListService } from './shopping-list';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, routing],
  bootstrap: [AppComponent],
  providers: [ShoppingListService]
})
export class AppModule { }