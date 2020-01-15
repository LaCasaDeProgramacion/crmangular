import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/products/api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  ListCategories: any = [];
  constructor(private productService : ApiService) { }

  ngOnInit() {
    this.populateCateg();
  }
  loadEmployees() {

    return this.productService.getCategories().subscribe((data:{})=>{
      this.ListCategories=data
    }
    )
  }

  populateCateg()
{
  this.productService.getCategories().subscribe(
    (Data) => {
      this.ListCategories = Data ;
      console.log(Data);
    }
   )
}
deleteCateg(category_id) {
  if (window.confirm('Are you sure, you want to delete?')){
    this.productService.deleteCategory(category_id).subscribe(data => {
      this.loadEmployees()
    })
  }
}
}
