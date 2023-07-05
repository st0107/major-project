import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipes: Recipe[] = [
    new Recipe('masala paneer', 'masala paneer', 'https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg'),
    new Recipe('salad', 'salad', 'https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=600')
  ];
  @Output() selected = new EventEmitter<Recipe>();

  onSelected(recipe: Recipe) {
    this.selected.emit(recipe);
  }
}


