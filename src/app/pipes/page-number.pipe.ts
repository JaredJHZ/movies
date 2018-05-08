import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pageNumber'
})
export class PageNumberPipe implements PipeTransform {

  transform(value: any, n?: any): any {
    let numbers:any[]=[];
    for(let i = 0;i<n;i++){
      numbers.push(i);
      if(i==4){
        break;
      }
    }
    return numbers;
  }

}
