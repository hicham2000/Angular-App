import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {ActivatedRoute, Params} from "@angular/router";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
  @Input("recipe") recipe:any;

  constructor(private shop:ShoppingListService,private recipes:RecipeService,private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (parmes:Params)=>{
        this.recipe=this.recipes.getrecipe(+parmes['id']);
      }
    )
  }

  toshoppinglist() {
    for (let i = 0; i < this.recipe.ingrediants.length; i++) {
      // console.log(ing[i].name);
      // console.log(this.recipe.ingrediants[0].name);
      this.shop.onadd(this.recipe.ingrediants[i].name, this.recipe.ingrediants[i].amount);
    }
  }

}
