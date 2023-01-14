import { Component } from '@angular/core';
import {Recipe} from "../recipe.model";


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes:Recipe[] = [
    new Recipe('A test racipe',
      'test discription',
      'https://www.bbcgoodfoodme.com/wp-content/uploads/2023/01/Braised-beef-cottage-pie.jpg'),
new Recipe('A test racipe',
      'test discription',
      'https://www.bbcgoodfoodme.com/wp-content/uploads/2023/01/Braised-beef-cottage-pie.jpg')

  ];

}
