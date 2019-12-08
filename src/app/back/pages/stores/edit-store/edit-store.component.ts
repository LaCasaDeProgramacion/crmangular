import { ApiStore } from 'src/app/services/stores/apistore.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-store',
  templateUrl: './edit-store.component.html',
  styleUrls: ['./edit-store.component.scss']
})
export class EditStoreComponent implements OnInit {
  store_id = this.actRoute.snapshot.params['store_id'];
  storeata: any = {};
  constructor(    public restApi: ApiStore,
    public actRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.restApi.findStorebyId(this.store_id).subscribe((data: {}) => {
      this.storeata = data;
    })
  }
  updateEmployee() {
    if(window.confirm('Are you sure, you want to update?')){
      this.restApi.updateStore(this.store_id, this.storeata).subscribe(data => {
        this.router.navigate(['/home'])
      })
    }
  }
}
