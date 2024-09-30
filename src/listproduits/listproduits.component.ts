import { Component } from '@angular/core';
import {Product} from "../app/Modules/product";
import {Category} from "../app/Modules/Category";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-listproduits',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './listproduits.component.html',
  styleUrl: './listproduits.component.css'
})
export class ListproduitsComponent {
  products: Product[] = [
    // Phones (12 products)
    new Product('iPhone 13', 999, 'The latest iPhone with advanced features.', 'https://www.backmarket.be/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D828/https://d2e6ccujb3mkqf.cloudfront.net/fa941fc6-8030-4771-aa55-6669d698d7a4-1_b868ca67-85cf-46e7-9118-df44ab5bced0.jpg', Category.Phones),
    new Product('Galaxy S24 Ultra', 999, 'The latest iPhone with advanced features.', 'https://www.mymac.dz/wp-content/uploads/2021/12/iphone-13-pro-or-600x600.jpg', Category.Phones),
    new Product('Sumsung', 999, 'The latest iPhone with advanced features.', 'https://images.samsung.com/is/image/samsung/p6pim/ph/sm-a057flggphl/gallery/ph-galaxy-a05s-sm-a057-sm-a057flggphl-thumb-538436187', Category.Phones),
    new Product('iPhone 13', 999, 'The latest iPhone with advanced features.', 'https://www.backmarket.be/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D828/https://d2e6ccujb3mkqf.cloudfront.net/fa941fc6-8030-4771-aa55-6669d698d7a4-1_b868ca67-85cf-46e7-9118-df44ab5bced0.jpg', Category.Phones),
    new Product('iPhone 13', 999, 'The latest iPhone with advanced features.', 'https://www.backmarket.be/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D828/https://d2e6ccujb3mkqf.cloudfront.net/fa941fc6-8030-4771-aa55-6669d698d7a4-1_b868ca67-85cf-46e7-9118-df44ab5bced0.jpg', Category.Phones),
    new Product('iPhone 13', 999, 'The latest iPhone with advanced features.', 'https://www.backmarket.be/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D828/https://d2e6ccujb3mkqf.cloudfront.net/fa941fc6-8030-4771-aa55-6669d698d7a4-1_b868ca67-85cf-46e7-9118-df44ab5bced0.jpg', Category.Phones),
    new Product('iPhone 13', 999, 'The latest iPhone with advanced features.', 'https://www.backmarket.be/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D828/https://d2e6ccujb3mkqf.cloudfront.net/fa941fc6-8030-4771-aa55-6669d698d7a4-1_b868ca67-85cf-46e7-9118-df44ab5bced0.jpg', Category.Phones),

    // Computers (12 products)
    new Product('MacBook Pro', 2499, 'High-performance laptop for professionals.', 'https://ayoubstore.ma/wp-content/uploads/2023/08/refurb-mbp16-space-m1-2021_GEO_EMEA_LANG_FR.jpg', Category.Computers),
    new Product('MacBook Pro', 2499, 'High-performance laptop for professionals.', 'https://ayoubstore.ma/wp-content/uploads/2023/08/refurb-mbp16-space-m1-2021_GEO_EMEA_LANG_FR.jpg', Category.Computers),
    new Product('MacBook Pro', 2499, 'High-performance laptop for professionals.', 'https://ayoubstore.ma/wp-content/uploads/2023/08/refurb-mbp16-space-m1-2021_GEO_EMEA_LANG_FR.jpg', Category.Computers),
    new Product('MacBook Pro', 2499, 'High-performance laptop for professionals.', 'https://ayoubstore.ma/wp-content/uploads/2023/08/refurb-mbp16-space-m1-2021_GEO_EMEA_LANG_FR.jpg', Category.Computers),
    new Product('MacBook Pro', 2499, 'High-performance laptop for professionals.', 'https://ayoubstore.ma/wp-content/uploads/2023/08/refurb-mbp16-space-m1-2021_GEO_EMEA_LANG_FR.jpg', Category.Computers),
    new Product('MacBook Pro', 2499, 'High-performance laptop for professionals.', 'https://ayoubstore.ma/wp-content/uploads/2023/08/refurb-mbp16-space-m1-2021_GEO_EMEA_LANG_FR.jpg', Category.Computers),
    new Product('MacBook Pro', 2499, 'High-performance laptop for professionals.', 'https://ayoubstore.ma/wp-content/uploads/2023/08/refurb-mbp16-space-m1-2021_GEO_EMEA_LANG_FR.jpg', Category.Computers),
    new Product('MacBook Pro', 2499, 'High-performance laptop for professionals.', 'https://ayoubstore.ma/wp-content/uploads/2023/08/refurb-mbp16-space-m1-2021_GEO_EMEA_LANG_FR.jpg', Category.Computers),

  ];
  addProduct(name:string,price:number,description:string,url:string,category:Category){
    const p=new Product(name,price,description,url,category);
    this.products.push(p);
  }
  cart: Product[] = [];

  addToCart(product: Product) {
    this.cart.push(product);
    console.log(`${product.name} has been added to the cart.`);
  }

}
