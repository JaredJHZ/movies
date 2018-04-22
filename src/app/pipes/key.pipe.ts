import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'key'
})
export class KeyPipe implements PipeTransform {

  transform(objects: any, n:number): string[] {
    let keys:any[]=[];
    let i = 0;
    for(let object in objects){
      if(i<n){
        keys.push(object);
      }else {
        break;
      }
      i++;
    }
    console.log(keys);
    return keys;
  }

}
