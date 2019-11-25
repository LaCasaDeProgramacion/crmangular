import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { HomeComponent } from './home/home.component';
import { TopicsComponent } from './forum/topics/topics.component';

@NgModule({
  declarations: [HomeComponent, TopicsComponent],
  imports: [
    CommonModule,
    FrontRoutingModule,
    HomeComponent,
    TopicsComponent
  ]
})
export class FrontModule { }
