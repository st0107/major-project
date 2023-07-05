import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeBookComponent } from "./recipe-book.component";
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
@NgModule({
    declarations: [
        RecipeBookComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeDetailComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        RecipeBookComponent,
        RecipeListComponent

    ]
})
export class RecipeBookModule { }