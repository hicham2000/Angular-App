import {Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {ShoppingListService} from "../shopping-list.service";
import {Form, FormControl, NgForm} from "@angular/forms";
import {Subscription} from "rxjs";
import {ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy{
 subscription !: Subscription;
 editemode:boolean = false;

 ingridiantIndex!:number;
  @ViewChild("f",{static:false}) inputControl! : any;

constructor(private shooping:ShoppingListService) {
}

  // onclick(name: any, amount: any) {
  //   this.shooping.onadd(name.value,amount.value);
  //
  // }

  onclick(input:NgForm){
  if(this.editemode===false){

    this.shooping.onadd(input.value.name,input.value.amount);
  }
  else {
    this.shooping.update(this.ingridiantIndex,new ingredient(input.value.name,input.value.amount));
    this.editemode=false;
    this.inputControl.reset();

  }
  }

  ngOnInit() {
 this.subscription = this.shooping.startEditing.subscribe(
    (value)=>{
      this.editemode= true;
      this.ingridiantIndex=value;
      this.inputControl.form.patchValue({
        name: this.shooping.ingredients[value].name,
        amount:this.shooping.ingredients[value].amount
      })
    }
  )
  }

  ngOnDestroy() {
  this.subscription.unsubscribe();
  }
}
