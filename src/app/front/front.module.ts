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

import { ProductsComponent } from './pages/products/products.component';
import { ProductsListComponent } from './pages/products/products-list/products-list.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ListpackComponent } from './pages/packs/listpack/listpack.component';
import { OnepackinfoComponent } from './pages/packs/onepackinfo/onepackinfo.component';
import { ProductSliderComponent } from './pages/products/product-slider/product-slider.component';
import { SearchComponent } from './pages/products/search/search.component';
import { ProductFilterComponent } from './pages/products/product-filter/product-filter.component';
import { FortuneWheelComponent } from './pages/products/fortune-wheel/fortune-wheel.component';
import { AutocompletetextComponent } from '../back/pages/stores/autocompletetext/autocompletetext.component';
import { ProductDetailComponent } from './pages/products/product-detail/product-detail.component';

import { EventsFrontComponent } from './events-front/events-front.component';
import { YouCouponComponent } from './pages/you-coupon/you-coupon.component';




@NgModule({

  declarations: [HomeComponent,TopicsComponent, FrontNavComponent, FrontFooterComponent, AllTopicsComponent,
                 SingleTopicComponent, ConfirmPassComponent, StoresComponent, StoresListComponent,
                 FooterComponent, ProductsComponent,FilterByBrandPipe, ChatComponent, ProductSliderComponent, SearchComponent, ProductFilterComponent, FortuneWheelComponent, ProductDetailComponent, ListpackComponent, OnepackinfoComponent, EventsFrontComponent, YouCouponComponent,],

  imports: [
    CommonModule,
    FrontRoutingModule,
    HomeComponent,
    GMapModule,
    DataViewModule,
    SidebarModule,
    ProductsListComponent,
    FormsModule,
    AutocompletetextComponent,



  ],
  exports: [

  FooterComponent,
     TopicsComponent,
    FrontNavComponent,
    FrontFooterComponent,
    AllTopicsComponent,
    SingleTopicComponent,
    EventsFrontComponent,
    ListpackComponent,
    OnepackinfoComponent,
    
],




})
export class FrontModule { }
