"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var RecipeDetailComponent = (function () {
    function RecipeDetailComponent(_shoppingListService, _router, _route, _recipeService) {
        this._shoppingListService = _shoppingListService;
        this._router = _router;
        this._route = _route;
        this._recipeService = _recipeService;
    }
    RecipeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._subscription = this._route.params.subscribe(function (params) {
            _this._recipeIndex = params['id'];
            _this.selectedRecipe = _this._recipeService.getRecipe(_this._recipeIndex);
        });
    };
    RecipeDetailComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    RecipeDetailComponent.prototype.onAddToShoppingList = function () {
        this._shoppingListService.addItems(this.selectedRecipe.ingredients);
    };
    RecipeDetailComponent.prototype.onEdit = function () {
        this._router.navigate(['/recipes', this._recipeIndex, 'edit']);
    };
    RecipeDetailComponent.prototype.onDelete = function () {
        this._recipeService.deleteRecipe(this.selectedRecipe);
        this._router.navigate(['/recipes']);
    };
    __decorate([
        core_1.Input()
    ], RecipeDetailComponent.prototype, "selectedRecipe");
    RecipeDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rb-recipe-detail',
            templateUrl: 'recipe-detail.component.html'
        })
    ], RecipeDetailComponent);
    return RecipeDetailComponent;
}());
exports.RecipeDetailComponent = RecipeDetailComponent;
//# sourceMappingURL=recipe-detail.component.js.map