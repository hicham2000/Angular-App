import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes:Recipe[] = [
    new Recipe('A test racipe 1',
      'test discription 1',
      'https://www.bbcgoodfoodme.com/wp-content/uploads/2023/01/Braised-beef-cottage-pie.jpg'),
    new Recipe('A test racipe 2',
      'test discription 2',
      'https://www.bbcgoodfoodme.com/wp-content/uploads/2023/01/Braised-beef-cottage-pie.jpg')

  ];

  recepesSelected = new EventEmitter<Recipe>();

  constructor() { }
}
