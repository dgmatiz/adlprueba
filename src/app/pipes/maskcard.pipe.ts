import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskcard'
})
export class MaskcardPipe implements PipeTransform {

  transform(value: string): string {
    if(value == null){
      return null;
    }else{
      return "XXXX XXXX XXXX " + value.substr(-4);
    }
  }

}
