import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterbytype"
})
export class filterbytypePipe implements PipeTransform {
  transform(items: any, select?: any): any {
    if (select !== "All") {
        console.log(items);
        console.log(select);
      return select
        ? items.filter(item => item["typeComplaint"]["typeName"] === select)
        : items;
    } else {
      return items;
    }
    
  }
}
