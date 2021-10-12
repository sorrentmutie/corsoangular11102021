import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformName'
})
export class TransformNamePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/o/g,'***');
  }

}
