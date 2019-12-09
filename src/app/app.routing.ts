import { AuthUserService } from './services/auth-user.service';
import { MycomplaintDetailsComponent } from './front/complaints/mycomplaint-details/mycomplaint-details.component';
import { ServiceDetailsComponent } from './front/Services/service-details/service-details.component';
import { AllServicesComponent } from './front/Services/all-services/all-services.component';
import { MyTelLineDetailsComponent } from './front/TelLines/my-tel-line-details/my-tel-line-details.component';
import { MyTelLinesComponent } from './front/TelLines/my-tel-lines/my-tel-lines.component';
import { AjoutComplaintComponent } from './front/complaints/ajout-complaint/ajout-complaint.component';
import { MycomplaintsComponent } from './front/complaints/mycomplaints/mycomplaints.component';
import { AllcomplaintsComponent } from './front/complaints/allcomplaints/allcomplaints.component';
import { ProductDetailComponent } from './front/pages/products/product-detail/product-detail.component';
import { FortuneWheelComponent } from './front/pages/products/fortune-wheel/fortune-wheel.component';
import { EventsFrontComponent } from './front/events-front/events-front.component';
import { AllForumsComponent } from './front/forum/all-forums/all-forums.component';

import { ProductsListComponent } from './front/pages/products/products-list/products-list.component';
import { ProductsComponent } from './front/pages/products/products.component';
import { StoresListComponent } from './front/pages/stores/stores-list/stores-list.component';
import { SingleTopicComponent } from './front/forum/single-topic/single-topic.component';
import { AllTopicsComponent } from './front/forum/all-topics/all-topics.component';
import { HomeComponent } from './front/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './back/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './back/layouts/auth-layout/auth-layout.component';
import { CarbrandComponent } from './back/pages/prospecting/vehicle/carbrand/carbrand.component';
import { TopicsComponent } from './front/forum/topics/topics.component';
import { ComplaintDetailsComponent } from './front/complaints/complaint-details/complaint-details.component';
import { MyServicesComponent } from './front/Services/my-services/my-services.component';


const routes: Routes =[
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: 'home', component: HomeComponent},
  { path: 'home/stores', component: StoresListComponent},
  { path: 'home/products', component: ProductsListComponent},
  { path: 'home/topics', component: TopicsComponent},
  { path: 'home/allTopics', component: AllTopicsComponent},
  { path: 'home/singleTopic', component: SingleTopicComponent},
  { path: 'home/allcomplaints', component: AllcomplaintsComponent,canActivate:[AuthUserService]},
  { path: 'home/mycomplaints', component: MycomplaintsComponent,canActivate:[AuthUserService]},
  { path: 'home/mycomplaintsdetails/:id', component: MycomplaintDetailsComponent,canActivate:[AuthUserService]},

  { path: 'home/cdetails/:id', component: ComplaintDetailsComponent,canActivate:[AuthUserService]},
  { path: 'home/ajoutcomplaint', component: AjoutComplaintComponent,canActivate:[AuthUserService]},
  { path: 'home/MyLines', component: MyTelLinesComponent,canActivate:[AuthUserService]},
  { path: 'home/MyLineDetails/:id', component: MyTelLineDetailsComponent,canActivate:[AuthUserService]},
  { path: 'home/AllServices', component: AllServicesComponent,canActivate:[AuthUserService]},
  { path: 'home/ServiceDetails/:id', component: ServiceDetailsComponent,canActivate:[AuthUserService]},
  { path: 'home/MyServices', component: MyServicesComponent,canActivate:[AuthUserService]},


  { path: 'home/fortune', component: FortuneWheelComponent},
  {
    path: 'product/:id',
    component: ProductDetailComponent
  },
  { path: 'home/allTopics/:id', component: AllTopicsComponent},
  { path: 'home/singleTopic/:id', component: SingleTopicComponent},
  { path: 'home/allForums', component: AllForumsComponent},
  { path: 'home/EventsFront', component: EventsFrontComponent},

  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './back/layouts/admin-layout/admin-layout.module#AdminLayoutModule'

      }
    ]
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './back/layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
