import { Category } from "./Category";

export class Product {
  name:string;
  price:number;
  description:string;
  url:string;
  category:Category;
  qte:number;
  constructor(name:string,price:number,description:string,url:string,category:Category,qte:number) {
    this.name=name;
    this.price=price;
    this.description=description;
    this.url=url;
    this.category=category;
    this.qte=qte;
  }
}
