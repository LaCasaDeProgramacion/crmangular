import { NavbarComponent } from './back/components/navbar/navbar.component';
import { MycomplaintDetailsComponent } from './front/complaints/mycomplaint-details/mycomplaint-details.component';
import { ServiceDetailsComponent } from './front/Services/service-details/service-details.component';
import { AllServicesComponent } from './front/Services/all-services/all-services.component';
import { MyTelLineDetailsComponent } from './front/TelLines/my-tel-line-details/my-tel-line-details.component';
import { MyTelLinesComponent } from './front/TelLines/my-tel-lines/my-tel-lines.component';
import { AjoutComplaintComponent } from './front/complaints/ajout-complaint/ajout-complaint.component';
import { filterbystatePipe } from './front/pipes/filterbystate.pipe';
import { filterbytypePipe } from './front/pipes/filterbytype.pipe';
import { ComplaintDetailsComponent } from './front/complaints/complaint-details/complaint-details.component';
import { MycomplaintsComponent } from './front/complaints/mycomplaints/mycomplaints.component';
import { AllcomplaintsComponent } from './front/complaints/allcomplaints/allcomplaints.component';
import { ProductDetailComponent } from './front/pages/products/product-detail/product-detail.component';
import { CategoryFilterPipe } from './front/pipes/category-filter.pipe';
import { FortuneWheelComponent } from './front/pages/products/fortune-wheel/fortune-wheel.component';
import { ProductFilterComponent } from './front/pages/products/product-filter/product-filter.component';
import { SearchComponent } from './front/pages/products/search/search.component';
import { ProductSliderComponent } from './front/pages/products/product-slider/product-slider.component';
import { UiService } from './services/products/ui.service';
import { SortPipe } from './front/pipes/sort.pipe';
import { PagerService } from './services/pager/pager.service';
import { EventsFrontComponent } from './front/events-front/events-front.component';
import { AllForumsComponent } from './front/forum/all-forums/all-forums.component';

import { ChatComponent } from './front/pages/chat/chat.component';
import { ProductsListComponent } from './front/pages/products/products-list/products-list.component';
import { ProductsComponent } from './front/pages/products/products.component';
import { DataViewModule } from 'primeng/dataview';
import { SidebarModule, GMapModule } from 'primeng/primeng';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { StoresListComponent } from './front/pages/stores/stores-list/stores-list.component';
import { MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatFormFieldModule, MatMenuModule, MatToolbarModule, MatCardModule, MatSelectModule, MatListModule, MatSidenavModule, MatGridListModule, MatCheckboxModule } from '@angular/material';
import { TechnicianService } from './services/complaintsManagement/technician.service';
import { ComplaintTypesService } from './services/complaintsManagement/complaint-types.service';
import { ComplaintsService } from './services/complaintsManagement/complaints.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenInterceptor } from './services/Token.interceptor';
import { SingleTopicComponent } from './front/forum/single-topic/single-topic.component';
import { AllTopicsComponent } from './front/forum/all-topics/all-topics.component';
import { FrontFooterComponent } from './front/components/front-footer/front-footer.component';

import { TopicsComponent } from './front/forum/topics/topics.component';
import { HomeComponent } from './front/home/home.component';
import { NgModule } from '@angular/core';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './back/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './back/layouts/auth-layout/auth-layout.component';
import { NgbModule, NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './back/components/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { FilterByBrandPipe } from './front/pipes/filterByBrand.pipe';
import { ComplaintCommentsService } from './services/complaintsManagement/complaint-comments.service';
import { ComplaintObjectsService } from './services/complaintsManagement/complaint-objects.service';
import { ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns';
import { AddPackComponent } from './back/pages/pack/add-pack/add-pack.component';
import { ListPackComponent } from './back/pages/pack/list-pack/list-pack.component';
import { DatePipe } from '@angular/common';
import { ImageUploadModule } from './SharedComponent/image-upload/image-upload.module';
import { ArchiveListComponent } from './back/pages/pack/archive-list/archive-list.component';
import { UpdatePackComponent } from './back/pages/pack/update-pack/update-pack.component';
import { AddPromotionComponent } from './back/pages/promotion/add-promotion/add-promotion.component';
import { ListPromotionComponent } from './back/pages/promotion/list-promotion/list-promotion.component';
import { SelectbootstrapComponent } from './SharedComponent/selectbootstrap/selectbootstrap.component';
import { SelectbootstrapModule } from './SharedComponent/selectbootstrap/selectbootstrap.module';


import { FlexLayoutModule } from '@angular/flex-layout';


import { AngularFireModule } from "@angular/fire";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { environment } from "../environments/environment";
import { AutocompletetextComponent } from './back/pages/stores/autocompletetext/autocompletetext.component';
import { AddStoreMapComponent } from './back/pages/stores/add-store-map/add-store-map.component';
import { AgmCoreModule } from '@agm/core';
import { DropdownComponent } from './back/pages/products/dropdown/dropdown.component';
import { FilterPipe } from './front/pipes/filter.pipe';
import { ProductEditComponent } from './back/pages/products/product-edit/product-edit.component';
import { ListStoreComponent } from './back/pages/stores/list-store/list-store.component';
import { EditStoreComponent } from './back/pages/stores/edit-store/edit-store.component';
import { CategoriesComponent } from './back/pages/categories/categories.component';
import { ProductChartComponent } from './back/pages/products/product-chart/product-chart.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FrontNavComponent } from './front/components/front-nav/front-nav.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';


import { MyServicesComponent } from './front/Services/my-services/my-services.component';
import { ToastrModule } from 'ngx-toastr';
import { MaterialModule } from './material/material.module';
import { ListpackComponent } from './front/pages/packs/listpack/listpack.component';
import { OnepackinfoComponent } from './front/pages/packs/onepackinfo/onepackinfo.component';
import { YouCouponComponent } from './front/pages/you-coupon/you-coupon.component';


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
    Ng2SearchPipeModule,
    MatButtonModule,
     MatDialogModule,



    ReactiveFormsModule,
    ComboBoxModule,
    MaterialModule,
    FlexLayoutModule,
    NgxPaginationModule,





NgxImageZoomModule.forRoot(),

   AngularFireModule.initializeApp(environment.firebaseConfig),
   AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,


   ImageUploadModule,
   SelectbootstrapModule,
   ToastrModule.forRoot(),

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
    ChatComponent,
    AllcomplaintsComponent, MycomplaintsComponent, ComplaintDetailsComponent, AjoutComplaintComponent,
    filterbytypePipe,
    filterbystatePipe,
    MyTelLinesComponent, MyTelLineDetailsComponent, AllServicesComponent, ServiceDetailsComponent, MyServicesComponent,
    MycomplaintDetailsComponent,
    ListpackComponent,OnepackinfoComponent,YouCouponComponent,













    /********** new **********/
    TopicsComponent,
    FrontNavComponent,
    FrontFooterComponent,
    AllTopicsComponent,
    SingleTopicComponent,
    AllForumsComponent,
    EventsFrontComponent,







    CategoryFilterPipe,

ChatComponent,
ProductSliderComponent,
SearchComponent,
ProductFilterComponent,
FortuneWheelComponent,
ProductDetailComponent,
    /********** new **********/
    TopicsComponent,

    FrontFooterComponent,
    AllTopicsComponent,
    SingleTopicComponent,
    AutocompletetextComponent,
    AddStoreMapComponent,
    DropdownComponent,


    FrontNavComponent,


    /******  user *******/

  ],



  providers: [
    ComplaintsService,
    ComplaintTypesService,
    ComplaintCommentsService,
    ComplaintObjectsService,
    TechnicianService,

    DatePipe,
    PagerService,SortPipe,UiService,FilterByBrandPipe, FilterPipe,

    AngularFirestore,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: NgbDateAdapter,
    useClass: NgbDateNativeAdapter,
    }
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
