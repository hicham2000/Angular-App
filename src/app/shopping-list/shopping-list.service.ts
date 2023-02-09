import {EventEmitter, Injectable} from '@angular/core';
import {ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  // ingredientschanged=new EventEmitter<any>();
  startEditing = new Subject<number>()
  ingredients:any = [new ingredient("banana",4)];
  index:number=0;



  onadd(name:any,amount:any){
    this.ingredients.push(new ingredient(name,amount));
    // this.ingredientschanged.emit(this.ingredients);
  }

  add(ingrediant:any){
    this.ingredients.push(...ingrediant);
  }

  update(index:number,newingrediant:ingredient){
    this.ingredients[index]=newingrediant;

  }
  constructor() { }
}
