import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/products/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  category_id = this.actRoute.snapshot.params['category_id'];
  categdata: any = {};
  constructor(    public restApi: ApiService,
    public actRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
     this.restApi.findCategorybyId(this.category_id).subscribe((data: {}) => {
      this.categdata = data;
    })
  }
  updateEmployee() {
    if(window.confirm('Are you sure, you want to update?')){
      this.restApi.updateCategory(this.category_id, this.categdata).subscribe(data => {
        this.router.navigate(['/back/categories'])
      })
    }
  }
}
