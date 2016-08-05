import { provideRouter } from '@angular/router';

import { RecipesComponent, RECIPES_ROUTES } from './recipes';
import { ShoppingListComponent } from './shopping-list';

export const APP_ROUTES_PROVIDERS = [
  provideRouter([
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, children: RECIPES_ROUTES },
    { path: 'shopping-list', component: ShoppingListComponent },
  ])
]