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
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },

    /**************  Prospecting routing  **************/
    { path: 'back/carbrands', component: CarbrandComponent  },
    { path: 'back/vehicles', component: VehicleComponent  },
    { path: 'back/models', component: ModelComponent  },
    { path: 'back/agents', component: AgentComponent  },
    { path: 'back/agents-details', component: DetailsComponent  },
    { path: 'back/events', component: EventComponent  },
    { path: 'back/suggest-event', component: SuggestEventComponent  },
    { path: 'back/details-event', component: EventDetailsComponent  }
];
