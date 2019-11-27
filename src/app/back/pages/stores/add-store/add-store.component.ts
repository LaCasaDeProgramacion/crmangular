import { FeatureCollection, GeoJson } from './../../../../entities/map';
import { store } from './../../../../entities/stores';
import { ApiStore } from './../../../../services/stores/apistore.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import * as mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class AddStoreComponent implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/outdoors-v9';
  lat = 37.75;
  lng = -122.41;


  message = "Hello Tunisia";
store : store;
  // Data
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
 }
 private initializeMap() {
  // Center to the position
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;

      this.map.flyTo({
        center: [this.lng, this.lat]
      });
    });
  }

  this.buildMap();

}

buildMap() {
  this.map = new mapboxgl.Map({
    container: 'map',
    style: this.style,
    zoom: 13,
    center: [this.lng, this.lat]
  });

  // Add map controls
  this.map.addControl(new mapboxgl.NavigationControl());

  // Set point
  this.map.on('click', (event) => {
    this.lat = event.lngLat.lat;
    this.lng = event.lngLat.lng;

    this.map.flyTo({
      center: [this.lng, this.lat],
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
      "id": "store",
      "source": "store",
      "type": "circle",
      "paint": {
        "circle-radius": 8,
        "circle-color": "#ff0000",
        'circle-stroke-color': '#FFF',
        'circle-stroke-width': 1
      }
    });

  })

}

createMarker() {

  const coordinates = [this.lng, this.lat]
  const newMarker = new GeoJson(coordinates, { message: this.store });
  this.StoresService.createMarker(newMarker);

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
