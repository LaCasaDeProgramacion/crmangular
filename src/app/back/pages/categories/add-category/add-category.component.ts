import { Component, OnInit } from '@angular/core';
import { category } from 'src/app/entities/category';
import { ApiService } from 'src/app/services/products/api.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  category: category= new category();
  constructor(private userService: ApiService) { }

  ngOnInit() {
  }
  onSubmit() {




    //this.produit.store.store_id=1;
    this.userService.addCategory(this.category)
      .subscribe( data => {
       console.log(this.category)
      });
  }
}
