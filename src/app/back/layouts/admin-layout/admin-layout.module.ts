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
import { MatButtonModule, MatDialogModule } from '@angular/material';
// import { ToastrModule } from 'ngx-toastr';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    Ng2SearchPipeModule
    
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    CarbrandComponent,
    ComplaintsComponent,
    TechnicianComponent,
    TypeComplaintComponent,
    ObjectComplaintComponent
    
    


  ],
  exports: [
    Ng2SearchPipeModule
  ]
})

export class AdminLayoutModule {}
