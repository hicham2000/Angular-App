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

  toshoppinglist(ing:any){
    for (let i=0;i<ing.length;i++){
      // console.log(ing[i].name);
      this.shop.onadd(ing[i].name,ing[i].amount);
    }
  }
}
