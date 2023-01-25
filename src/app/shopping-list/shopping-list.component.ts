import { Component } from '@angular/core';
import {ingredient} from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients:ingredient[] = [];

  addtoingredient(list: { name:string, amount:number }) {
    this.ingredients.push(new ingredient(list.name,list.amount));
  }

}
