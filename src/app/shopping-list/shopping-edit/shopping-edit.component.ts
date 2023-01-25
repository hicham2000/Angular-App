import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @Output("list") list = new EventEmitter<{ name: string, amount: number; }>();

  onclick(name:any,amount:any){
    this.list.emit({name:name.value,amount:amount.value});
  }

}
