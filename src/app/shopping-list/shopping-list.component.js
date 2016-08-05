"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var shopping_list_add_component_1 = require('./shopping-list-add.component');
var ShoppingListComponent = (function () {
    function ShoppingListComponent(_shoppingListService) {
        this._shoppingListService = _shoppingListService;
        this.items = [];
    }
    ShoppingListComponent.prototype.ngOnInit = function () {
        this.items = this._shoppingListService.getItems();
    };
    ShoppingListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rb-shopping-list',
            templateUrl: 'shopping-list.component.html',
            directives: [shopping_list_add_component_1.ShoppingListAddComponent]
        })
    ], ShoppingListComponent);
    return ShoppingListComponent;
}());
exports.ShoppingListComponent = ShoppingListComponent;
//# sourceMappingURL=shopping-list.component.js.map