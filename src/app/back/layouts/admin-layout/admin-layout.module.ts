
import { AddStoreComponent } from './../../pages/stores/add-store/add-store.component';
import { MapStoreComponent } from './../../pages/stores/map-store/map-store.component';
import { StoresComponent } from './../../pages/stores/stores.component';
import { AddProductComponent } from './../../pages/products/add-product/add-product.component';
import { EventDetailsComponent } from './../../pages/prospecting/Event/event-details/event-details.component';
import { SuggestEventComponent } from './../../pages/prospecting/Event/suggest-event/suggest-event.component';
import { EventComponent } from './../../pages/prospecting/Event/event/event.component';
import { DetailsComponent } from './../../pages/prospecting/agent/details/details.component';
import { AgentComponent } from './../../pages/prospecting/agent/agent/agent.component';
import { VehicleComponent } from './../../pages/prospecting/vehicle/vehicle/vehicle.component';
import { ObjectComplaintComponent } from './../../pages/Complaints/object-complaint/object-complaint.component';
import { TypeComplaintComponent } from './../../pages/Complaints/type-complaint/type-complaint.component';
import { TechnicianComponent } from './../../pages/Complaints/technician/technician.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ComplaintsComponent } from './../../pages/Complaints/Complaints/complaints.component';
import { CarbrandComponent } from './../../pages/prospecting/vehicle/carbrand/carbrand.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from '../../pages/products/products.component';
import { ModelComponent } from '../../pages/prospecting/vehicle/model/model.component';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { ListPackComponent } from '../../pages/pack/list-pack/list-pack.component';
import { AddPackComponent } from '../../pages/pack/add-pack/add-pack.component';
import { ImageUploadModule } from 'src/app/SharedComponent/image-upload/image-upload.module';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { ArchiveListComponent } from '../../pages/pack/archive-list/archive-list.component';
import { UpdatePackComponent } from '../../pages/pack/update-pack/update-pack.component';
import { AddPromotionComponent } from '../../pages/promotion/add-promotion/add-promotion.component';
import { ListPromotionComponent } from '../../pages/promotion/list-promotion/list-promotion.component';
import { SelectbootstrapModule } from 'src/app/SharedComponent/selectbootstrap/selectbootstrap.module';
import { UpdatePromotionComponent } from '../../pages/promotion/update-promotion/update-promotion.component';
// import { ToastrModule } from 'ngx-toastr';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    
   
   
    ImageUploadModule,
    SelectbootstrapModule,
    JwBootstrapSwitchNg2Module,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    CarbrandComponent,
    ProductsComponent,
AddProductComponent,
StoresComponent,
AddStoreComponent,
MapStoreComponent,
    VehicleComponent,
    ModelComponent,
    AgentComponent,
    DetailsComponent,
    EventComponent,
    SuggestEventComponent,
    EventDetailsComponent,
    ComplaintsComponent,
    TechnicianComponent,
    TypeComplaintComponent,
    ObjectComplaintComponent,
    ListPackComponent,
    AddPackComponent,
    ArchiveListComponent,
    UpdatePackComponent,

    ListPromotionComponent,
    AddPromotionComponent,
    UpdatePromotionComponent,
    


  ],
  exports: [
    Ng2SearchPipeModule
    
   
  ]
})

export class AdminLayoutModule {}
