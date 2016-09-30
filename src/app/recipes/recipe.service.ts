import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

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

  recipesChanges = new EventEmitter<Recipe[]>();

  constructor(private _http: Http) { }

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

  storeData() {
    const body = JSON.stringify(this._recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this._http.put('https://recipebook-b7589.firebaseio.com/recipes.json', body, { headers: headers });
  }

  fetchData() {
    return this._http.get('https://recipebook-b7589.firebaseio.com/recipes.json')
      .map((response: Response) => response.json())
      .subscribe(
        (recipes: Recipe[]) => {
          this._recipes = recipes;
          this.recipesChanges.emit(this._recipes);
        }
      );
  }
}
