import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormArray,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Subscription } from 'rxjs/Rx';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-edit',
  templateUrl: 'recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  private _recipeIndex: number;
  private _recipe: Recipe;
  private _subscription: Subscription;

  isNew = true;
  recipeForm: FormGroup;

  constructor(private _route: ActivatedRoute,
              private _recipeService: RecipeService,
              private _formBuilder: FormBuilder,
              private _router: Router) { }

  ngOnInit() {
    this._subscription = this._route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this._recipeIndex = +params['id'];
          this._recipe = this._recipeService.getRecipe(this._recipeIndex);
        } else {
          this.isNew = true;
          this._recipe = null;
        }
        this._initForm();
      }
    );
  }

  onSubmit() {
    const newRecipe = this.recipeForm.value;
    if (this.isNew) {
      this._recipeService.addRecipe(newRecipe);
    } else {
      this._recipeService.editRecipe(this._recipe, newRecipe);
    }
    this.navigateBack();
  }

  onCancel() {
    this.navigateBack();
  }

  onAddItem(name: string, amount: string) {
    (<FormArray>this.recipeForm.controls['ingredients']).push(
      new FormGroup({
        name: new FormControl(name, Validators.required),
        amount: new FormControl(amount, [
          Validators.required,
          Validators.pattern('\\d+')
        ])
      })
    );
  }

  onRemoveItem(index: number) {
    (<FormArray>this.recipeForm.controls['ingredients']).removeAt(index);
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  private navigateBack() {
    this._router.navigate(['../']);
  }

  private _initForm() {
    let recipeName = '';
    let recipeImageUrl = '';
    let recipeContent = '';
    const recipeIngredients: FormArray = new FormArray([]);

    if (!this.isNew) {
      if (this._recipe.hasOwnProperty('ingredients')) {
        for (let i = 0; i < this._recipe.ingredients.length; i++) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(this._recipe.ingredients[i].name, Validators.required),
              amount: new FormControl(this._recipe.ingredients[i].amount, [
                Validators.required,
                Validators.pattern('\\d+')
              ])
            })
          );
        }
      }
      recipeName = this._recipe.name;
      recipeImageUrl = this._recipe.imagePath;
      recipeContent = this._recipe.description;
    }
    this.recipeForm = this._formBuilder.group({
      name: [recipeName, Validators.required],
      imagePath: [recipeImageUrl, Validators.required],
      description: [recipeContent, Validators.required],
      ingredients: recipeIngredients
    });
  }
}
