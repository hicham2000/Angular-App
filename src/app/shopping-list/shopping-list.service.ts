import {EventEmitter, Injectable} from '@angular/core';
import {ingredient} from "../shared/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  // ingredientschanged=new EventEmitter<any>();
  ingredients:any = [new ingredient("banana",4)];



  onadd(name:any,amount:any){
    this.ingredients.push(new ingredient(name,amount));
    // this.ingredientschanged.emit(this.ingredients);
  }

  add(ingrediant:any){
    this.ingredients.push(...ingrediant);
  }
  constructor() { }
}
