import { Component, Output } from '@angular/core'
import { Recipe } from './model/recipe.model'

@Component({
    selector: 'app-recipe-book',
    templateUrl: './recipe-book.component.html',
    styleUrls: ['./recipe-book.component.css'],
})
export class RecipeBookComponent {
    selectrecipe?: Recipe;

    selectedEl(recipe: Recipe) {
        this.selectrecipe = recipe;
    }

}