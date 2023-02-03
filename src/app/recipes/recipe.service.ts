import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {ingredient} from "../shared/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipe:any;
  recipes:any = [
    new Recipe(1,'A test racipe 1',
      'test discription 1',
      'https://www.bbcgoodfoodme.com/wp-content/uploads/2023/01/Braised-beef-cottage-pie.jpg',
      [new ingredient("milk",5),new ingredient("apple",10)]) ,
    new Recipe(2,'A test racipe 2',
      'test discription 2',
      'https://www.bbcgoodfoodme.com/wp-content/uploads/2023/01/Braised-beef-cottage-pie.jpg',
  [new ingredient("bread",5),new ingredient("token",10)])

  ];

  recepesSelected = new EventEmitter<any>();

  getrecipe(id: number) {
    const recipe = this.recipes.find(
      (s:any)=>{
        return s.id === id;
      }
    );
    return recipe;
  }

  constructor() { }
}
