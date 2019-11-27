import { ApiStore } from './../../../services/stores/apistore.service';
import { store } from './../../../entities/stores';
import { Component, OnInit } from '@angular/core';
import { GeoJson } from 'src/app/entities/map';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

  constructor(private StoresService : ApiStore) { }

  ListStoress: any = [];
  detailsProduct : store ;


  ngOnInit() {

    this.StoresService.getStores().subscribe(
      (Data) => {
        this.ListStoress = Data ;
        console.log("stores"+Data);
      }
     )

  }

  getDetails(d )
  {
    console.log(d) ;
  }


  loadStores() {

    return this.StoresService.getStores().subscribe((data:{})=>{
      this.ListStoress=data
    }
    )
  }
  deleteStore(store_id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.StoresService.deleteStore(store_id).subscribe(data => {
        this.loadStores()
      })
    }
}


}
