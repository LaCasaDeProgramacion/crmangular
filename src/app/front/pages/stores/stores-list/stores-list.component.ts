import { store } from './../../../../entities/stores';
import { StoresClientService } from './../../../../services/stores/storesclient.service';
import { Component, OnInit, ViewEncapsulation, Output, Input, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
import { GMapModule } from 'primeng/components/gmap/gmap';
import { DataViewModule } from 'primeng/components/dataview/dataview';
import { SidebarModule } from 'primeng/components/sidebar/sidebar';
import { Observable, Subscription, timer } from 'rxjs';
@Component({
  selector: 'app-stores-list',
  templateUrl: './stores-list.component.html',
  styleUrls: ['./stores-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StoresListComponent implements OnInit {

  restaurants: any[];
  stores: any = [];
  time:any;
  selectedRestaurant: any;
  selectedStore: any;
  display: boolean;
  options: any;
  store:store;
  store_id:any;
  overlays: any[];
  map: google.maps.Map;
  icon: string = environment.contextUrl + 'assets/images/icon_map@2x.png';
  currentLat: any;
  currentLong: any;
  marker: any;
  searchText;
  constructor(private storesService: StoresClientService,private ref: ChangeDetectorRef) {
    this.display = false;
    this.options = { zoom: 18 };

  }

  ngOnInit() {


      this.storesService.getRestaurants().subscribe(
        (Data) => {
          this.stores = Data ;
          console.log("stores"+Data);
        }
       )



  }

  setMap(event) {
    this.map = event.map;
  }
showresult()
{
  this.storesService.getPosition().then(pos=>
    {
       console.log(`Positon: ${pos.lng} ${pos.lat}`);
    });
}
showPosition(position) {
  this.currentLat = position.coords.latitude;
  this.currentLong = position.coords.longitude;

  let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  this.map.panTo(location);

  if (!this.marker) {
    this.marker = new google.maps.Marker({
      position: location,
      map: this.map,
      title: 'Got you!'
    });
  }
  else {
    this.marker.setPosition(location);
  }
}
findMe() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.showPosition(position);
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

showTrackingPosition(position) {
  console.log(`tracking postion:  ${position.coords.latitude} - ${position.coords.longitude}`);
  this.currentLat = position.coords.latitude;
  this.currentLong = position.coords.longitude;

  let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  this.map.panTo(location);

  if (!this.marker) {
    this.marker = new google.maps.Marker({
      position: location,
      map: this.map,
      title: 'Got you!'
    });
  }
  else {
    this.marker.setPosition(location);
  }
}


  showStoreDetails(store) {
    this.selectedStore = store;
    this.display = !this.display;

    this.map.setCenter(new google.maps.LatLng(parseFloat(this.selectedStore.store_latitude), parseFloat(this.selectedStore.store_longitude)))
    this.overlays = [];
    this.stores.forEach(
      store => {
        this.overlays.push(
          new google.maps.Marker({
            position: { lat: parseFloat(store.store_latitude), lng: parseFloat (store.store_longitude) },
            label: store.store_name
          }));
      });

      this.storesService.getStoredistancebyId(store.store_id).subscribe(data => {
        console.log(data);
      });

  }


CalculatedistancebyId(store_id){
  this.storesService.getStoredistancebyId(store_id).subscribe(data => {
    console.log(data);
  });

}

calculatetime() {

 this.time=this.store.distance /25;

console.log(this.time)
}
refresh(): void {
  window.location.reload();
}

refreshh() {
  window.location.reload();
}
}
