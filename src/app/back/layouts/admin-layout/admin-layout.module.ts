
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
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    FormsModule,
    ReactiveFormsModule
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
    EventDetailsComponent
  ]
})

export class AdminLayoutModule {}
