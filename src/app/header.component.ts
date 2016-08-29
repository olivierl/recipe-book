import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { DropdownDirective } from './dropdown.directive';
import { RecipeService } from './recipes';

@Component({
  moduleId: module.id,
  selector: 'rb-header',
  templateUrl: 'header.component.html',
  directives: [DropdownDirective, ROUTER_DIRECTIVES]
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
