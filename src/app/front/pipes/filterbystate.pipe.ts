import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterbystate"
})
export class filterbystatePipe implements PipeTransform {
  transform(items: any, select?: any): any {
    if (select == true) {
        console.log(items);
        console.log(select);
      return select
        ? items.filter(item => item["complaintState"] === select)
        : items;
    } else {
      return items;
    }
    
  }
}
