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
    { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/back/products', title: 'Products',  icon:'ni-glasses-2 text-blue', class: ''},
{ path: '/back/categories', title: 'Categories',  icon:'ni-books text-green', class: ''},

    { path: '/back/listpack', title: 'Pack',  icon:'ni-app text-blue', class: ''},
    { path: '/back/listpromotion', title: 'Discount',  icon:'ni-bag-17 text-blue', class: ''},
    { path: '/back/liststores', title: 'Stores',  icon:'ni-shop text-red', class: ''},
    { path: '/back/lines', title: 'Lines',  icon:'ni ni-world text-orange', class: ''},
    { path: '/back/services', title: 'Services',  icon:'ni ni-mobile-button text-blue', class: ''},
    { path: '/back/vehicles', title: 'Vehicles',  icon:'ni-delivery-fast text-blue', class: ''},
    { path: '/back/agents', title: 'Agents',  icon:'ni-badge text-orange', class: ''},
    { path: '/back/events', title: 'Events',  icon:'ni-building text-info', class: ''},
    { path: '/calendar', title: 'Events Calendar',  icon:' ni-calendar-grid-58 text-blue', class: ''},
    { path: '/back/complaints', title: 'Complaints',  icon:'ni ni-align-center text-primary', class: ''},


  ];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  imgLink="https://www.weblife.fr/wp-content/uploads/2012/02/logo-orange.jpg";
  //imgLink="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/1022px-Orange_logo.svg.png";
  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
