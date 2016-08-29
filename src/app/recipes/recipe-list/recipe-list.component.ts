import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';
import { RecipeService } from '../recipe.service';

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives: [RecipeItemComponent, ROUTER_DIRECTIVES]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private _recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this._recipeService.getRecipes();
    this._recipeService.recipesChanges.subscribe(
      (recipes: Recipe[]) => this.recipes = recipes
    );
  }
}
