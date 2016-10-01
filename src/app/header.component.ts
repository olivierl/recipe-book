import { Component } from '@angular/core';

import { RecipeService } from './recipes/recipe.service';

@Component({
  selector: 'rb-header',
  templateUrl: 'header.component.html',
  styles: [`
    ul.dropdown-menu > li > a {
      cursor: pointer;
    }
  `]
})
export class HeaderComponent {

  constructor(private _recipeService: RecipeService) { }

  onStore() {
    this._recipeService.storeData().subscribe(
      data => console.log(data),
      error => console.error(error)
    );
  }

  onFetch() {
    this._recipeService.fetchData();
  }
}
