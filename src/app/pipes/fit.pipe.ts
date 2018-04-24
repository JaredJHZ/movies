import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fit'
})
export class FitPipe implements PipeTransform {

  transform(word: string): any {
    let words:string[];
    words = word.split(' ');
    if(words.length > 1){
      return words[0]+' '+words[1];
    }return words[0];
  }

}
