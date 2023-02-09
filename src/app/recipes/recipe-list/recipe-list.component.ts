import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes:any = [];
  constructor(private recipe:RecipeService) {
  }
  ngOnInit() {
    this.recipes=this.recipe.recipes;
  }

  onclick(index:number){
    this.recipe.editRecipe.next(index);
  }
@Output("recipeInfo") res= new EventEmitter<any>();


}
