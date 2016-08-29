import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { AppRoutes } from './app.routes';
import { ShoppingListService } from './shopping-list';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, AppRoutes],
  bootstrap: [AppComponent],
  providers: [ShoppingListService]
})
export class AppModule { }