import {Component, Input} from '@angular/core';
import {Recipe} from "../recipe.model";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input("recipe") recipe:any;

  constructor(private shop:ShoppingListService) {
  }

  toshoppinglist() {
    for (let i = 0; i < this.recipe.ingrediants.length; i++) {
      // console.log(ing[i].name);
      // console.log(this.recipe.ingrediants[0].name);
      this.shop.onadd(this.recipe.ingrediants[i].name, this.recipe.ingrediants[i].amount);
    }
  }

}
