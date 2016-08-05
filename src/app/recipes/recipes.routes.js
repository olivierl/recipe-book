"use strict";
var recipe_start_component_1 = require('./recipe-start.component');
var recipe_edit_1 = require('./recipe-edit');
var recipe_detail_1 = require('./recipe-detail');
exports.RECIPES_ROUTES = [
    { path: '', component: recipe_start_component_1.RecipeStartComponent },
    { path: 'new', component: recipe_edit_1.RecipeEditComponent },
    { path: ':id', component: recipe_detail_1.RecipeDetailComponent },
    { path: ':id/edit', component: recipe_edit_1.RecipeEditComponent }
];
//# sourceMappingURL=recipes.routes.js.map