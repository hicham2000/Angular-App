export class Recipe{
  public name:string;
  public discription:string;
  public imagePath:string;

  constructor(name: string, discription: string, imagepath: string) {
    this.name=name;
    this.discription=discription;
    this.imagePath=imagepath;
  }
}
