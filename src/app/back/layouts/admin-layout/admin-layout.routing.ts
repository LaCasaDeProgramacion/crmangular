import { ServicelineDetailComponent } from './../../pages/TelLines/serviceline-detail/serviceline-detail.component';
import { TellinDetailComponent } from './../../pages/TelLines/tellin-detail/tellin-detail.component';
import { ComplaintDetailComponent } from './../../pages/Complaints/complaint-detail/complaint-detail.component';
import { ServicesLinesComponent } from './../../pages/TelLines/services-lines/services-lines.component';
import { TelephonelinesComponent } from './../../pages/TelLines/telephonelines/telephonelines.component';
import { ObjectComplaintComponent } from './../../pages/Complaints/object-complaint/object-complaint.component';
import { TypeComplaintComponent } from './../../pages/Complaints/type-complaint/type-complaint.component';
import { TechnicianComponent } from './../../pages/Complaints/technician/technician.component';
import { ComplaintsComponent } from './../../pages/Complaints/Complaints/complaints.component';
import { ProductChartComponent } from './../../pages/products/product-chart/product-chart.component';
import { EditStoreComponent } from './../../pages/stores/edit-store/edit-store.component';
import { ListStoreComponent } from './../../pages/stores/list-store/list-store.component';
import { ProductEditComponent } from './../../pages/products/product-edit/product-edit.component';

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
import { ListPackComponent } from '../../pages/pack/list-pack/list-pack.component';
import { AddPackComponent } from '../../pages/pack/add-pack/add-pack.component';
import { UpdatePackComponent } from '../../pages/pack/update-pack/update-pack.component';
import { ArchiveListComponent } from '../../pages/pack/archive-list/archive-list.component';
import { ListPromotionComponent } from '../../pages/promotion/list-promotion/list-promotion.component';
import { AddPromotionComponent } from '../../pages/promotion/add-promotion/add-promotion.component';
import { CategoriesComponent } from '../../pages/categories/categories.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent,canActivate:[AuthUserService] },
    { path: 'user-profile',   component: UserProfileComponent,canActivate:[AuthUserService] },
    { path: 'tables',         component: TablesComponent,canActivate:[AuthUserService] },
    { path: 'icons',          component: IconsComponent,canActivate:[AuthUserService] },
    { path: 'maps',           component: MapsComponent,canActivate:[AuthUserService] },
    /**************  firas routing  **************/
    { path: 'back/products', component: ProductsComponent},
    { path: 'back/addproduct', component: AddProductComponent } ,
    { path: 'product-edit/:id', component: ProductEditComponent },
   { path: 'back/stores', component: StoresComponent},
   { path: 'back/mapstores', component: MapStoreComponent},
   { path: 'back/addstores', component: AddStoreComponent},
   { path: 'back/liststores', component: ListStoreComponent},
   { path: 'back/productstatistics', component: ProductChartComponent},
   { path: 'back/categories', component: CategoriesComponent},
   { path: 'store-edit/:store_id', component: EditStoreComponent },
    /**************  Prospecting routing  **************/
    { path: 'back/carbrands', component: CarbrandComponent,canActivate:[AuthUserService]  },
    { path: 'back/vehicles', component: VehicleComponent ,canActivate:[AuthUserService] },
    { path: 'back/models', component: ModelComponent ,canActivate:[AuthUserService] },
    { path: 'back/agents', component: AgentComponent ,canActivate:[AuthUserService] },
    { path: 'back/agents-details', component: DetailsComponent ,canActivate:[AuthUserService] },
    { path: 'back/events', component: EventComponent ,canActivate:[AuthUserService] },
    { path: 'back/suggest-event', component: SuggestEventComponent ,canActivate:[AuthUserService] },
{ path: 'back/details-event/:id', component: EventDetailsComponent ,canActivate:[AuthUserService] },
    /**************  wael routing  **************/
    { path: 'back/listpack', component: ListPackComponent ,canActivate:[AuthUserService] },
    { path: 'back/addpack', component: AddPackComponent ,canActivate:[AuthUserService] },
    { path: 'back/updatepack', component: UpdatePackComponent ,canActivate:[AuthUserService] },
    { path: 'back/listarchivepacks', component: ArchiveListComponent  },

    { path: 'back/listpromotion', component: ListPromotionComponent ,canActivate:[AuthUserService] },
    { path: 'back/addpromotion', component: AddPromotionComponent  ,canActivate:[AuthUserService] },
    { path: 'back/Updatepromotion', component: UpdatePackComponent  ,canActivate:[AuthUserService] },



    { path: 'back/complaints', component: ComplaintsComponent  },
    { path: 'back/technician', component: TechnicianComponent  },
    { path: 'back/Type', component: TypeComplaintComponent  },
    { path: 'back/Object', component: ObjectComplaintComponent  },
    { path: 'back/lines', component: TelephonelinesComponent  },
    { path: 'back/services', component: ServicesLinesComponent  },
    { path: 'back/complaintDetails/:id', component: ComplaintDetailComponent  },
    { path: 'back/lineDetails/:id', component: TellinDetailComponent  },
    { path: 'back/serviceLineDetail/:id', component: ServicelineDetailComponent  },

];
