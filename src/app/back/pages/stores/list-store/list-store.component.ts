import { FeatureCollection, GeoJson } from './../../../../entities/map';
import { store } from './../../../../entities/stores';
import { ApiStore } from './../../../../services/stores/apistore.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import * as mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-list-store',
  templateUrl: './list-store.component.html',
  styleUrls: ['./list-store.component.css']
})
export class ListStoreComponent implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/outdoors-v9';
  store_latitude = 37.75;
  store_longitude = -122.41;


  store_name = "Boutique 01";
store : store;
store_id:number;
  // Data
  ListStores: any = [];
  source: any;
  markers: any;
  constructor(private StoresService : ApiStore) {

  }
  addForm: FormGroup;
 ngOnInit() {
 // Get markers from mapService
 this.StoresService.getStores().subscribe(markers => this.markers = markers);

 // Initialize creation of map
 this.initializeMap();
 this.StoresService.getStoredistancebyId(this.store_id);
 }
 private initializeMap() {
  // Center to the position
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      this.store_latitude = position.coords.latitude;
      this.store_longitude = position.coords.longitude;

      this.map.flyTo({
        center: [this.store_longitude, this.store_latitude]
      });
    });
  }

  this.buildMap();

}

buildMap() {
  this.map = new mapboxgl.Map({
    container: 'map',
    style: this.style,
    zoom: 25,
    center: [this.store_longitude, this.store_latitude]
  });

  // Add map controls
  this.map.addControl(new mapboxgl.NavigationControl());

  // Set point
  this.map.on('click', (event) => {
    this.store_latitude = event.lngLat.lat;
    this.store_longitude = event.lngLat.lng;

    this.map.flyTo({
      center: [this.store_longitude, this.store_latitude],
      zoom: 17
    });

  });

  // Add realtime data on map load
  this.map.on('load', (event) => {

    // Register source
    this.map.addSource('store', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: []
      }
    });

    // Get source
    this.source = this.map.getSource('store');

    // Set data
    let data = new FeatureCollection(this.markers);
    this.source.setData(data);

    // Create map layers with realtime data

    this.map.addLayer({
      id: 'store',
      source: 'store',
      type: 'symbol',
      layout: {
        'text-field': '{store_name}',
        'text-size': 22,
        'icon-image': 'circle-15',
        'text-offset': [0, 1.5]
      },
      paint: {
        'text-color': '#E74C3C',
        'text-halo-color': '#fff',
        'text-halo-width': 2
      }
    });

  })

}

createMarker() {

  // Check duplicate row
  let duplicate = this.markers.filter(item => this.store.store_name === this.store_name );
  if (duplicate.length > 0) {
    console.log("Duplicated!");
    return;
  }

  const coordinates = [this.store_longitude, this.store_latitude]
  const newMarker = new GeoJson(coordinates, { store_name: this.store_name });
  this.StoresService.createMarker(newMarker);

}
loadEmployees() {

  return this.StoresService.getStores().subscribe((data:{})=>{
    this.ListStores=data
  }
  )
}
deleteStore(store_id) {
  if (window.confirm('Are you sure, you want to delete?')){
    this.StoresService.deleteStore(store_id).subscribe(data => {
      this.loadEmployees()
    })
  }
}
removeMarker(store) {
  this.StoresService.removeMarker(store.id)
    .then(function(resp){
      console.log("Removed!");
    })
    .catch(function(error){
      console.log(error);
    });
}

flyTo(store: store) {
  this.map.flyTo({
    center: [store.store_longitude,store.store_latitude],
    zoom: 13,
  })
}

}
