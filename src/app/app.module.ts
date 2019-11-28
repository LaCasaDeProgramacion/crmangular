import { TokenInterceptor } from './services/Token.interceptor';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { TechnicianService } from './services/complaintsManagement/technician.service';
import { ComplaintTypesService } from './services/complaintsManagement/complaint-types.service';
import { ComplaintsService } from './services/complaintsManagement/complaints.service';
import { HomeComponent } from './front/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { ComplaintCommentsService } from './services/complaintsManagement/complaint-comments.service';
import { ComplaintObjectsService } from './services/complaintsManagement/complaint-objects.service';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    MatButtonModule,
     MatDialogModule,
     FormsModule,
    
    ReactiveFormsModule,
    
    

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    HomeComponent
    
    
    
    


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
