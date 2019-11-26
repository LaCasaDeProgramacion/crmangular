import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { HomeComponent } from './home/home.component';
import { TopicsComponent } from './forum/topics/topics.component';
import { FrontNavComponent } from './components/front-nav/front-nav.component';
import { FrontFooterComponent } from './components/front-footer/front-footer.component';
import { AllTopicsComponent } from './forum/all-topics/all-topics.component';
import { SingleTopicComponent } from './forum/single-topic/single-topic.component';

@NgModule({
  declarations: [HomeComponent, TopicsComponent, FrontNavComponent, FrontFooterComponent, AllTopicsComponent, SingleTopicComponent],
  imports: [
    CommonModule,
    FrontRoutingModule,
    HomeComponent,
    /***** new *****/
    TopicsComponent,
    FrontNavComponent,
    FrontFooterComponent,
    AllTopicsComponent,
    SingleTopicComponent
  ]
})
export class FrontModule { }
