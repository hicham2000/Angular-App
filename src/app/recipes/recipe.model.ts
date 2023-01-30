import {ingredient} from "../shared/ingredient.model";

export class Recipe{
  public name:string;
  public discription:string;
  public imagePath:string;
  public ingrediants: ingredient[];

  constructor(name: string, discription: string, imagepath: string , ingrediants: ingredient[]) {
    this.name=name;
    this.discription=discription;
    this.imagePath=imagepath;
    this.ingrediants=ingrediants;
  }
}
