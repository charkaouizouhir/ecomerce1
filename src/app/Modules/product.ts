import { Category } from "./Category";

export class Product {
  name:string;
  price:number;
  description:string;
  url:string;
  category:Category;
  constructor(name:string,price:number,description:string,url:string,category:Category){
    this.name=name;
    this.price=price;
    this.description=description;
    this.url=url;
    this.category=category;
  }
}
