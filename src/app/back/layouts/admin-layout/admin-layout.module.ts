import { ServicelineDetailComponent } from './../../pages/TelLines/serviceline-detail/serviceline-detail.component';
import { TellinDetailComponent } from './../../pages/TelLines/tellin-detail/tellin-detail.component';
import { ComplaintDetailComponent } from './../../pages/Complaints/complaint-detail/complaint-detail.component';
import { ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns';
import { ServicesLinesComponent } from './../../pages/TelLines/services-lines/services-lines.component';
import { TelephonelinesComponent } from './../../pages/TelLines/telephonelines/telephonelines.component';

import { ProductChartComponent } from './../../pages/products/product-chart/product-chart.component';
import { EditStoreComponent } from './../../pages/stores/edit-store/edit-store.component';
import { ListStoreComponent } from './../../pages/stores/list-store/list-store.component';

import { UpdateVehicleComponent } from './../../pages/prospecting/vehicle/update-vehicle/update-vehicle.component';
import { ForumComponent } from './../../pages/prospecting/forum/forum.component';
import { AddContractComponent } from './../../pages/prospecting/agent/add-contract/add-contract.component';
import { AddAgentComponent } from './../../pages/prospecting/agent/add-agent/add-agent.component';

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
import { GridModule } from '@syncfusion/ej2-angular-grids';
import {NgxPaginationModule} from 'ngx-pagination';

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
import { FilterPipe } from 'src/app/front/pipes/filter.pipe';
import { ProductEditComponent } from '../../pages/products/product-edit/product-edit.component';
import { CategoriesComponent } from '../../pages/categories/categories.component';

import { AddVehicleComponent } from '../../pages/prospecting/vehicle/add-vehicle/add-vehicle.component';

// import { ToastrModule } from 'ngx-toastr';
import { ScheduleModule, RecurrenceEditorModule , DayService, WeekService,
         WorkWeekService, MonthService, MonthAgendaService
          , DragAndDropService, ResizeService} from '@syncfusion/ej2-angular-schedule';
  import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
  import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { EventCalendarComponent } from '../../pages/prospecting/event-calendar/event-calendar.component';
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
    ComboBoxModule,
    GridModule,
    NgxPaginationModule,




    ImageUploadModule,
    SelectbootstrapModule,
    JwBootstrapSwitchNg2Module,

    ReactiveFormsModule,

    ImageUploadModule,
    SelectbootstrapModule,
    JwBootstrapSwitchNg2Module,
    NgxPaginationModule,
    ScheduleModule, RecurrenceEditorModule,
    DropDownListModule, DateTimePickerModule
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
    TelephonelinesComponent,
    ServicesLinesComponent,
    ComplaintDetailComponent,
    TellinDetailComponent,
    ServicelineDetailComponent,


    ListPackComponent,
    AddPackComponent,
    ArchiveListComponent,
    UpdatePackComponent,
    ListPromotionComponent,
    AddPromotionComponent,
    UpdatePromotionComponent,


    FilterPipe,
    ProductEditComponent,
    ListStoreComponent,
    EditStoreComponent,
    CategoriesComponent,
    ProductChartComponent,




    AddVehicleComponent,
    AddAgentComponent,
    AddContractComponent,
    ForumComponent,
    EventCalendarComponent,
    UpdateVehicleComponent,
  ],
  exports: [
    Ng2SearchPipeModule,
    NgxPaginationModule,
    ComboBoxModule,
    GridModule,
  ],
  providers: [
    DayService, WeekService,
    WorkWeekService, MonthService, MonthAgendaService, DragAndDropService, ResizeService
  ],
})

export class AdminLayoutModule {}
