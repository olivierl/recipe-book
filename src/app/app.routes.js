"use strict";
var router_1 = require('@angular/router');
var recipes_1 = require('./recipes');
var shopping_list_1 = require('./shopping-list');
exports.APP_ROUTES_PROVIDERS = [
    router_1.provideRouter([
        { path: '', redirectTo: '/recipes', pathMatch: 'full' },
        { path: 'recipes', component: recipes_1.RecipesComponent, children: recipes_1.RECIPES_ROUTES },
        { path: 'shopping-list', component: shopping_list_1.ShoppingListComponent },
    ])
];
//# sourceMappingURL=app.routes.js.map