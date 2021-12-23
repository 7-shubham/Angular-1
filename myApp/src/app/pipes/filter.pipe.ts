import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any , filterString: string , prodName:string){
    if(value.length == 0 || filterString == ''){

        return value;
    }

    const item = [];

    for(const items of value){

        if(items[prodName].trim().toLowerCase().includes(filterString.toLowerCase())){

            item.push(items);
        }
    }
     return item;
  }

}
