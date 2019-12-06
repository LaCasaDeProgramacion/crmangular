import { FormsModule } from '@angular/forms';
import { FilterByBrandPipe } from './pipes/filterByBrand.pipe';
import { StoresComponent } from './../back/pages/stores/stores.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontRoutingModule } from './front-routing.module';
import { HomeComponent } from './home/home.component';
import { TopicsComponent } from './forum/topics/topics.component';
import { FrontNavComponent } from './components/front-nav/front-nav.component';
import { FrontFooterComponent } from './components/front-footer/front-footer.component';
import { AllTopicsComponent } from './forum/all-topics/all-topics.component';
import { SingleTopicComponent } from './forum/single-topic/single-topic.component';
import { ConfirmPassComponent } from './user/confirm-pass/confirm-pass.component';
import { StoresListComponent } from './pages/stores/stores-list/stores-list.component';
import { GMapModule } from 'primeng/components/gmap/gmap';
import { DataViewModule } from 'primeng/components/dataview/dataview';
import { SidebarModule } from 'primeng/components/sidebar/sidebar';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsListComponent } from './pages/products/products-list/products-list.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ListpackComponent } from './pages/packs/listpack/listpack.component';
import { OnepackinfoComponent } from './pages/packs/onepackinfo/onepackinfo.component';



@NgModule({

  declarations: [HomeComponent,TopicsComponent, FrontNavComponent, FrontFooterComponent, AllTopicsComponent, 
                 SingleTopicComponent, ConfirmPassComponent, StoresComponent, StoresListComponent, 
                 FooterComponent, NavbarComponent, ProductsComponent,FilterByBrandPipe, ChatComponent, ListpackComponent, OnepackinfoComponent,],

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
     TopicsComponent,
    FrontNavComponent,
    FrontFooterComponent,
    AllTopicsComponent,
    SingleTopicComponent,
    
],


  

})
export class FrontModule { }
