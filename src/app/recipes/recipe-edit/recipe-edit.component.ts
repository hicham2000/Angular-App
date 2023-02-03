import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit{

  recipe:any;
  constructor(private route:ActivatedRoute,private res:RecipeService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (parmes:Params)=>{
        this.recipe = this.res.getrecipe(+parmes['id']);
      }
    )
  }

}
