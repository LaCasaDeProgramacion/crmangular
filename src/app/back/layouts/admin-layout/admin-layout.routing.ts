import { AuthUserService } from './../../../services/auth-user.service';
import { EventDetailsComponent } from './../../pages/prospecting/Event/event-details/event-details.component';
import { SuggestEventComponent } from './../../pages/prospecting/Event/suggest-event/suggest-event.component';
import { EventComponent } from './../../pages/prospecting/Event/event/event.component';
import { DetailsComponent } from './../../pages/prospecting/agent/details/details.component';
import { AgentComponent } from './../../pages/prospecting/agent/agent/agent.component';
import { VehicleComponent } from './../../pages/prospecting/vehicle/vehicle/vehicle.component';
import { Routes } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { CarbrandComponent } from '../../pages/prospecting/vehicle/carbrand/carbrand.component';
import { ModelComponent } from '../../pages/prospecting/vehicle/model/model.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent,canActivate:[AuthUserService] },
    { path: 'user-profile',   component: UserProfileComponent,canActivate:[AuthUserService] },
    { path: 'tables',         component: TablesComponent,canActivate:[AuthUserService] },
    { path: 'icons',          component: IconsComponent,canActivate:[AuthUserService] },
    { path: 'maps',           component: MapsComponent,canActivate:[AuthUserService] },

    /**************  Prospecting routing  **************/
    { path: 'back/carbrands', component: CarbrandComponent,canActivate:[AuthUserService]  },
    { path: 'back/vehicles', component: VehicleComponent ,canActivate:[AuthUserService] },
    { path: 'back/models', component: ModelComponent ,canActivate:[AuthUserService] },
    { path: 'back/agents', component: AgentComponent ,canActivate:[AuthUserService] },
    { path: 'back/agents-details', component: DetailsComponent ,canActivate:[AuthUserService] },
    { path: 'back/events', component: EventComponent ,canActivate:[AuthUserService] },
    { path: 'back/suggest-event', component: SuggestEventComponent ,canActivate:[AuthUserService] },
    { path: 'back/details-event', component: EventDetailsComponent ,canActivate:[AuthUserService] }
];
