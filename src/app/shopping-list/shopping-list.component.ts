import { Component } from '@angular/core';
import { Ingredient } from './model/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingradients: Ingredient[] = [new Ingredient('potato', 5), new Ingredient('onion', 2), new Ingredient('green chilli ', 2), new Ingredient('coriander', '10 gram')];
}
