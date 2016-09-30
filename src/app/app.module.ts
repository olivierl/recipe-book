import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { DropdownDirective } from './dropdown.directive';
import {
  RecipeStartComponent,
  RecipesComponent,
  RecipeListComponent,
  RecipeItemComponent,
  RecipeEditComponent,
  RecipeDetailComponent,
  RecipeService
} from './recipes';
import {
  ShoppingListComponent,
  ShoppingListAddComponent,
  ShoppingListService
} from './shopping-list';
import { RecipeBookRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeEditComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListAddComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RecipeBookRoutingModule
  ],
  providers: [
    RecipeService,
    ShoppingListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
