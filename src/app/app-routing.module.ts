import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";


const routes: Routes = [
  {path:"",redirectTo:'/recipes',pathMatch:'full'},
  {path:"shopping-list",component:ShoppingListComponent},
  {path:"recipes",component:RecipesComponent , children:[
      {path:"recipe-detail",component:RecipeDetailComponent},
      {path:"recipe-edit",component:RecipeEditComponent}
    ]},

  {path:"**",redirectTo:'/recipes'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
