import { StoresClientService } from './../../../../services/stores/storesclient.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from 'src/environments/environment';

import { GMapModule } from 'primeng/components/gmap/gmap';
import { DataViewModule } from 'primeng/components/dataview/dataview';
import { SidebarModule } from 'primeng/components/sidebar/sidebar';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-stores-list',
  templateUrl: './stores-list.component.html',
  styleUrls: ['./stores-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StoresListComponent implements OnInit {

  restaurants: any[];
  stores: any = [];

  selectedRestaurant: any;
  selectedStore: any;
  display: boolean;
  options: any;
  overlays: any[];
  map: google.maps.Map;
  icon: string = environment.contextUrl + 'assets/images/icon_map@2x.png';
  currentLat: any;
  currentLong: any;
  marker: any;

  constructor(private restaurantsService: StoresClientService) {
    this.display = false;
    this.options = { zoom: 18 };
  }

  ngOnInit() {


      this.restaurantsService.getRestaurants().subscribe(
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
  this.restaurantsService.getPosition().then(pos=>
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


  showRestaurantDetails(store) {
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


  }


}
