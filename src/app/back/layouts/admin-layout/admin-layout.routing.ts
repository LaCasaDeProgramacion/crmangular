import { ObjectComplaintComponent } from './../../pages/Complaints/object-complaint/object-complaint.component';
import { TypeComplaintComponent } from './../../pages/Complaints/type-complaint/type-complaint.component';
import { TechnicianComponent } from './../../pages/Complaints/technician/technician.component';
import { ComplaintsComponent } from './../../pages/Complaints/Complaints/complaints.component';

import { AddStoreComponent } from './../../pages/stores/add-store/add-store.component';
import { MapStoreComponent } from './../../pages/stores/map-store/map-store.component';
import { StoresComponent } from './../../pages/stores/stores.component';
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
import { ProductsComponent } from '../../pages/products/products.component';
import { AddProductComponent } from '../../pages/products/add-product/add-product.component';




import { ModelComponent } from '../../pages/prospecting/vehicle/model/model.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent,canActivate:[AuthUserService] },
    { path: 'user-profile',   component: UserProfileComponent,canActivate:[AuthUserService] },
    { path: 'tables',         component: TablesComponent,canActivate:[AuthUserService] },
    { path: 'icons',          component: IconsComponent,canActivate:[AuthUserService] },
    { path: 'maps',           component: MapsComponent,canActivate:[AuthUserService] },
    /**************  firas routing  **************/
    { path: 'back/products', component: ProductsComponent},
    { path: 'back/addproduct', component: AddProductComponent } ,
   { path: 'back/stores', component: StoresComponent},
   { path: 'back/mapstores', component: MapStoreComponent},
   { path: 'back/addstores', component: AddStoreComponent},

    /**************  Prospecting routing  **************/
    { path: 'back/carbrands', component: CarbrandComponent,canActivate:[AuthUserService]  },
    { path: 'back/vehicles', component: VehicleComponent ,canActivate:[AuthUserService] },
    { path: 'back/models', component: ModelComponent ,canActivate:[AuthUserService] },
    { path: 'back/agents', component: AgentComponent ,canActivate:[AuthUserService] },
    { path: 'back/agents-details', component: DetailsComponent ,canActivate:[AuthUserService] },
    { path: 'back/events', component: EventComponent ,canActivate:[AuthUserService] },
    { path: 'back/suggest-event', component: SuggestEventComponent ,canActivate:[AuthUserService] },
    { path: 'back/details-event', component: EventDetailsComponent ,canActivate:[AuthUserService] },

    
    { path: 'back/complaints', component: ComplaintsComponent  },
    { path: 'back/technician', component: TechnicianComponent  },
    { path: 'back/Type', component: TypeComplaintComponent  },
    { path: 'back/Object', component: ObjectComplaintComponent  }
];
