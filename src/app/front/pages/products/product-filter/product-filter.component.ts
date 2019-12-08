import { category } from './../../../../entities/category';
import { ApiService } from 'src/app/services/products/api.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  categories: category[];

  @Input('category') category;

  constructor(private categoryService: ApiService) {}
  ngOnInit() {
     this.popoulateCat();
  }

  popoulateCat(){
     this.categoryService.getCategories().subscribe(
      (Data) => {
        this.categories = Data ;
        console.log("cat"+Data);
      }
     );
  }

}
