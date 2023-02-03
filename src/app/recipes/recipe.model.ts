import {ingredient} from "../shared/ingredient.model";

export class Recipe{
  public id:number;
  public name:string;
  public discription:string;
  public imagePath:string;
  public ingrediants: ingredient[];

  constructor(id: number, name: string, discription: string, imagepath: string, ingrediants: ingredient[]) {
    this.id=id;
    this.name = name;
    this.discription = discription;
    this.imagePath = imagepath;
    this.ingrediants = ingrediants;
  }
}
