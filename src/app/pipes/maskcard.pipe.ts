import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskcard'
})
export class MaskcardPipe implements PipeTransform {

  transform(value: string): string {
    return "XXXX XXXX XXXX " + value.substr(-4);
  }

}
