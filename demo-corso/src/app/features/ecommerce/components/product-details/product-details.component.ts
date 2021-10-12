import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  {

  constructor(){
    console.log('componente details');
  }

  @Input() product: Product | undefined;
  @Output() comebackEmitter: EventEmitter<string> =
    new EventEmitter<string>();

  comeback(): void {
    this.comebackEmitter.emit('Torna indietro');
  }

}
