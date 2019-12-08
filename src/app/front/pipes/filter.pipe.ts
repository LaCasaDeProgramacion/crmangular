import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterOptions'
})

export class FilterPipe implements PipeTransform {
  transform(options: any[], searchText: string): any[] {
    if (!options) return [];
    if (!searchText) return options;
    searchText = searchText.toLowerCase();
    return options.filter(item => {
      return item['label'].toLowerCase().indexOf(searchText)==0;
    });
  }
}
