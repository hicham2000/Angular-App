import {Component, EventEmitter, Output} from '@angular/core';
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {


constructor(private shooping:ShoppingListService) {
}

  onclick(name: any, amount: any) {
    this.shooping.onadd(name.value,amount.value);

  }

}
