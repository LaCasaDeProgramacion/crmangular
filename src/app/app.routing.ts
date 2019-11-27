
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


const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  { path: 'home', component: HomeComponent},
  { path: 'home/stores', component: StoresListComponent},
  { path: 'home/products', component: ProductsListComponent},
  { path: 'home/topics', component: TopicsComponent},
  { path: 'home/allTopics', component: AllTopicsComponent},
  { path: 'home/singleTopic', component: SingleTopicComponent},
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
