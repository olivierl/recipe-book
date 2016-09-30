import { Component, OnInit } from '@angular/core';

import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../shared';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: 'shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[] = [];
  selectedItem: Ingredient = null;

  constructor(private _shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.items = this._shoppingListService.getItems();
  }

  onSelectItem(item: Ingredient) {
    this.selectedItem = item;
  }

  onClear() {
    this.selectedItem = null;
  }
}
