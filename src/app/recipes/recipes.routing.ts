import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start.component';
import { RecipeEditComponent } from './recipe-edit';
import { RecipeDetailComponent } from './recipe-detail';

const RECIPES_ROUTES: Routes = [
  {
    path: '', component: RecipesComponent, children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent }
    ]
  }
];

export const RecipesRouting = RouterModule.forChild(RECIPES_ROUTES);
