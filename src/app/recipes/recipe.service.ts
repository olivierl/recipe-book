import { Injectable } from '@angular/core';

import { Recipe } from './recipe';
import { Ingredient } from '../shared';

@Injectable()
export class RecipeService {
  private _recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://images.derberater.de/files/imagecache/456xXXX_berater/berater/slides/WienerSchnitzel.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1),
    ]),
    new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
  ];

  constructor() { }

  getRecipes() {
    return this._recipes;
  }

  getRecipe(id: number) {
    return this._recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this._recipes.splice(this._recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
    this._recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this._recipes[this._recipes.indexOf(oldRecipe)] = newRecipe;
  }
}
