import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
    { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/back/carbrands', title: 'Car Brands',  icon:'ni-delivery-fast text-blue', class: ''},
    { path: '/back/products', title: 'Products',  icon:'ni-glasses-2 text-blue', class: ''},
    { path: '/back/stores', title: 'Stores',  icon:'ni-shop text-red', class: ''},
    { path: '/back/vehicles', title: 'Vehicles',  icon:'ni-delivery-fast text-blue', class: ''},
    { path: '/back/agents', title: 'Agents',  icon:'ni-badge text-orange', class: ''},
    { path: '/back/events', title: 'Events',  icon:'ni-building text-info', class: ''},
<<<<<<< HEAD
    { path: '/back/complaints', title: 'Complaints',  icon:'ni ni-collection text-blue', class: ''},
    { path: '/back/lines', title: 'Lines',  icon:'ni ni-collection text-blue', class: ''},
    { path: '/back/services', title: 'Services',  icon:'ni ni-collection text-blue', class: ''},
=======
    { path: '/back/listpack', title: 'Pack',  icon:'ni-app text-blue', class: ''},
    { path: '/back/listpromotion', title: 'Discount',  icon:'ni-bag-17 text-blue', class: ''},
>>>>>>> Wael back work with upload image
  ];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
