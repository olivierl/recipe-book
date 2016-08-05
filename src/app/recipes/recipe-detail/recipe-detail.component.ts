import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe';
import { ShoppingListService } from '../../shopping-list';

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-detail',
  templateUrl: 'recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  constructor(private _shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this._shoppingListService.addItems(this.selectedRecipe.ingredients);
  }

}
