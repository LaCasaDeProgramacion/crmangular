import { FormsModule } from '@angular/forms';
import { FilterByBrandPipe } from './pipes/filterByBrand.pipe';

import { StoresComponent } from './../back/pages/stores/stores.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { HomeComponent } from './home/home.component';

import { StoresListComponent } from './pages/stores/stores-list/stores-list.component';
import { GMapModule } from 'primeng/components/gmap/gmap';
import { DataViewModule } from 'primeng/components/dataview/dataview';
import { SidebarModule } from 'primeng/components/sidebar/sidebar';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsListComponent } from './pages/products/products-list/products-list.component';
import { ChatComponent } from './pages/chat/chat.component';



@NgModule({
  declarations: [HomeComponent, StoresComponent, StoresListComponent, FooterComponent, NavbarComponent, ProductsComponent,FilterByBrandPipe, ChatComponent],
  imports: [
    CommonModule,
    FrontRoutingModule,
    HomeComponent,
    GMapModule,
    DataViewModule,
    SidebarModule,
    ProductsListComponent,
    FormsModule


  ],
  exports: [
    NavbarComponent,
  FooterComponent,
],
})
export class FrontModule { }
