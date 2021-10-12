import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'transformSpecial'
})
export class TransformSpecialPipe implements PipeTransform {

  transform(product: Product ): string {
    if(product.price < 100) {
      return 'OCCASIONISSIMA';
    } else {
      return 'OFFERTA';
    }
  }

}
