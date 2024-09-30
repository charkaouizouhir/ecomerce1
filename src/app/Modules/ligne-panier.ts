import {Product} from "./product";

export class LignePanier {
  produit:Product;
  qte:number;
  constructor(produit:Product, qte:number) {
    this.produit = produit;
    this.qte = qte;
  }
}
