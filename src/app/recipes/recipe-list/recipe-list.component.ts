import {Component, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe.model";


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes:Recipe[] = [
    new Recipe('A test racipe 1',
      'test discription 1',
      'https://www.bbcgoodfoodme.com/wp-content/uploads/2023/01/Braised-beef-cottage-pie.jpg'),
new Recipe('A test racipe 2',
      'test discription 2',
      'https://www.bbcgoodfoodme.com/wp-content/uploads/2023/01/Braised-beef-cottage-pie.jpg')

  ];
@Output("recipeInfo") res= new EventEmitter<any>();
  onrecive(recipe:any){
    this.res.emit(recipe);
  }

}
