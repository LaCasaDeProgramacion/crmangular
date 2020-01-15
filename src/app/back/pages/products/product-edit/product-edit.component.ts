import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/products/api.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  productata: any = {};
  constructor(    public restApi: ApiService,
    public actRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
     this.restApi.findProductbyId(this.id).subscribe((data: {}) => {
      this.productata = data;
    })
  }
  updateEmployee() {
    if(window.confirm('Are you sure, you want to update?')){
      this.restApi.updatePro(this.id, this.productata).subscribe(data => {
        this.router.navigate(['/back/products'])
      })
    }
  }
}
