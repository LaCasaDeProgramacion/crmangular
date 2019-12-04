import { AjoutComplaintComponent } from './front/complaints/ajout-complaint/ajout-complaint.component';
import { filterbystatePipe } from './front/pipes/filterbystate.pipe';
import { filterbytypePipe } from './front/pipes/filterbytype.pipe';
import { ComplaintDetailsComponent } from './front/complaints/complaint-details/complaint-details.component';
import { MycomplaintsComponent } from './front/complaints/mycomplaints/mycomplaints.component';
import { AllcomplaintsComponent } from './front/complaints/allcomplaints/allcomplaints.component';

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './back/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './back/layouts/auth-layout/auth-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './back/components/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { FilterByBrandPipe } from './front/pipes/filterByBrand.pipe';
import { ComplaintCommentsService } from './services/complaintsManagement/complaint-comments.service';
import { ComplaintObjectsService } from './services/complaintsManagement/complaint-objects.service';
import { ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns';


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
   ReactiveFormsModule,
    MatButtonModule,
     MatDialogModule,
    
    
    ReactiveFormsModule,
    ComboBoxModule,
    
    

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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
