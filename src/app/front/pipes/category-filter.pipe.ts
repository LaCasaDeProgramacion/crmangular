import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "categoryFilter"
})

export class CategoryFilterPipe implements PipeTransform {
  transform(products: Array<any>, condition: {[productCategory: string]: any}): Array<any>{
    if(!products) {
      return null;
    }
    return products.filter(product=>{
      for(let productCategory in condition){
        if(product[productCategory] == condition[productCategory] || condition[productCategory] == ''){
          return true;
        } else if(product[productCategory] !== condition[productCategory]){
          return false;
        }
      }
      return true;
    })
  }
}
