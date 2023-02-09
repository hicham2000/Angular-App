import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {FormControl, NgForm} from "@angular/forms";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, AfterViewInit{

  @ViewChild('f',{static:false}) inputValue:any;

  recipe:any;
  recipeIndex!:number;
  constructor(private route:ActivatedRoute,private res:RecipeService) {
  }


ngAfterViewInit() {

}

  ngOnInit() {

  this.route.params.subscribe(
      (parmes:Params)=>{
        this.recipe = this.res.getrecipe(+parmes['id']);

      }
    )

    console.log(this.recipe);


  }

  onSubmit(form:NgForm){
    console.log(this.inputValue);
  }

}
