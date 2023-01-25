import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

@Output("section") section=new EventEmitter<string>();
  onrecipe(){
    this.section.emit("recipe");
  }

  onlist(){
    this.section.emit("shoplist");
  }

}
