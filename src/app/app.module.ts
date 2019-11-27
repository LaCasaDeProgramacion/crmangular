import { ChatComponent } from './front/pages/chat/chat.component';
import { ProductsListComponent } from './front/pages/products/products-list/products-list.component';
import { ProductsComponent } from './front/pages/products/products.component';
import { DataViewModule } from 'primeng/dataview';
import { SidebarModule, GMapModule } from 'primeng/primeng';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { StoresListComponent } from './front/pages/stores/stores-list/stores-list.component';

import { HomeComponent } from './front/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './back/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './back/layouts/auth-layout/auth-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './back/components/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { FilterByBrandPipe } from './front/pipes/filterByBrand.pipe';




@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    GMapModule,
    SidebarModule,
    DataViewModule,
Ng2SearchPipeModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    HomeComponent,
    StoresListComponent,
    ProductsComponent,
    ProductsListComponent,
    FilterByBrandPipe,
ChatComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
