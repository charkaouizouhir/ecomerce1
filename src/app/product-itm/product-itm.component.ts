import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductItm} from "../Modules/product-itm";
import {Product} from "../Modules/product";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-product-itm',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './product-itm.component.html',
  styleUrl: './product-itm.component.css'
})
export class ProductItmComponent {
  @Input() productItm!: Product;
  @Output() selectedProduct = new EventEmitter<Product>;
  addToCart() {
    this.selectedProduct.emit(this.productItm);
  }

  getColor(): string {
    return this.productItm.qte >0 ? 'green' : 'red';
  }
}
