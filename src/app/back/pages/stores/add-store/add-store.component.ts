import { ApiStore } from "src/app/services/stores/apistore.service";
import { OnInit, Component } from "@angular/core";
import { store } from "src/app/entities/stores";

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class AddStoreComponent implements OnInit {
stores: store[];
  sto: store= new store();
  store_name:any;
  constructor(private StoresService : ApiStore) {

  }

 ngOnInit() {

 }
 onSubmit() {


  //this.produit.store.store_id=1;
  this.StoresService.addStore(this.sto)
    .subscribe( data => {
     console.log("added")
    });
}
checkduplicated()
{
  let duplicate = this.stores.filter(item => item.store_name === this.store_name );
  if (duplicate.length > 0) {
    console.log("Duplicated!");
    return;
  }
}
}
