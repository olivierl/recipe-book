import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start.component';
import { RecipeListComponent, RecipeItemComponent } from './recipe-list';
import { RecipeEditComponent } from './recipe-edit';
import { RecipeDetailComponent } from './recipe-detail';
import { RecipesRouting } from './recipes.routing';

@NgModule({
  declarations: [
    RecipeStartComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeEditComponent,
    RecipeDetailComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, RecipesRouting],
  exports: [],
  providers: []
})
export class RecipesModule { }
