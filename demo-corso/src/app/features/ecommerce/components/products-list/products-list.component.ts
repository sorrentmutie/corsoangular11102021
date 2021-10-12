import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent  {

  @Input() products: Product[] = [];
  @Output() notify: EventEmitter<Product> = new EventEmitter();

  edit(product: Product): void {
    this.notify.emit(product);
  }
}
