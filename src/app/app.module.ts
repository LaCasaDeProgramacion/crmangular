
import { ChatComponent } from './front/pages/chat/chat.component';
import { ProductsListComponent } from './front/pages/products/products-list/products-list.component';
import { ProductsComponent } from './front/pages/products/products.component';
import { DataViewModule } from 'primeng/dataview';
import { SidebarModule, GMapModule } from 'primeng/primeng';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { StoresListComponent } from './front/pages/stores/stores-list/stores-list.component';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { TechnicianService } from './services/complaintsManagement/technician.service';
import { ComplaintTypesService } from './services/complaintsManagement/complaint-types.service';
import { ComplaintsService } from './services/complaintsManagement/complaints.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenInterceptor } from './services/Token.interceptor';
import { SingleTopicComponent } from './front/forum/single-topic/single-topic.component';
import { AllTopicsComponent } from './front/forum/all-topics/all-topics.component';
import { FrontFooterComponent } from './front/components/front-footer/front-footer.component';
import { FrontNavComponent } from './front/components/front-nav/front-nav.component';
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




import { ImageComponent } from './back/pages/prospecting/images/image/image.component';
import { ImagesListComponent } from './back/pages/prospecting/images/images-list/images-list.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from "../environments/environment";

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



   AngularFireModule.initializeApp(environment.firebaseConfig),
   AngularFireStorageModule,
   AngularFireDatabaseModule,
   ImageUploadModule,
   SelectbootstrapModule,

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






    /********** new **********/
    TopicsComponent,
    FrontNavComponent,
    FrontFooterComponent,
    AllTopicsComponent,
    SingleTopicComponent,











    /******  user *******/

  ],



  providers: [
    ComplaintsService,
    ComplaintTypesService,
    ComplaintCommentsService,
    ComplaintObjectsService,
    TechnicianService,

    DatePipe,
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
