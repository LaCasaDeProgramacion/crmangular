import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-store-map',
  templateUrl: './add-store-map.component.html',
  styleUrls: ['./add-store-map.component.css']
})
export class AddStoreMapComponent implements OnInit {
  latitude: number;
  longitude: number;
  zoom:number;
  constructor() { }

  ngOnInit() {

  }

}
