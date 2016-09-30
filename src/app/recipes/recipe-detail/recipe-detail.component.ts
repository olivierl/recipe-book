import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { Recipe } from '../recipe';
import { ShoppingListService } from '../../shopping-list';
import { RecipeService } from '../../recipes/recipe.service';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: 'recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  @Input() selectedRecipe: Recipe;
  private _recipeIndex: number;
  private _subscription: Subscription;

  constructor(
    private _shoppingListService: ShoppingListService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _recipeService: RecipeService) { }

  ngOnInit() {
    this._subscription = this._route.params.subscribe(
      (params: any) => {
        this._recipeIndex = params['id'];
        this.selectedRecipe = this._recipeService.getRecipe(this._recipeIndex);
      }
    );
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  onAddToShoppingList() {
    this._shoppingListService.addItems(this.selectedRecipe.ingredients);
  }

  onEdit() {
    this._router.navigate(['/recipes', this._recipeIndex, 'edit']);
  }

  onDelete() {
    this._recipeService.deleteRecipe(this.selectedRecipe);
    this._router.navigate(['/recipes']);
  }
}
