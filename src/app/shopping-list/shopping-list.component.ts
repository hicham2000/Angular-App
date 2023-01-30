import {Component, OnInit} from '@angular/core';
import {ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{

  ingredients:any;
  constructor(private shopping:ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients=this.shopping.ingredients;
    // this.shopping.ingredientschanged.subscribe(
    //   (ingredient:any)=>{
    //
    //     this.ingredients=ingredient;
    //   }
    // )
  }



}
