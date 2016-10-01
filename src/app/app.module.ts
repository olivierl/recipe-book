import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RecipeBookRoutingModule } from './app-routing.module';
import { CoreModule } from './core.module';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipes/recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
    RecipeBookRoutingModule,
    CoreModule
  ],
  providers: [
    RecipeService,
    ShoppingListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
