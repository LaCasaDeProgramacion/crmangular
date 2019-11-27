import { AddStoreComponent } from './../../pages/stores/add-store/add-store.component';
import { MapStoreComponent } from './../../pages/stores/map-store/map-store.component';
import { StoresComponent } from './../../pages/stores/stores.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { CarbrandComponent } from '../../pages/prospecting/vehicle/carbrand/carbrand.component';
import { ProductsComponent } from '../../pages/products/products.component';
import { AddProductComponent } from '../../pages/products/add-product/add-product.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'back/carbrands', component: CarbrandComponent  },
    { path: 'back/products', component: ProductsComponent},

      { path: 'back/addproduct', component: AddProductComponent } ,

    { path: 'back/stores', component: StoresComponent},
    { path: 'back/mapstores', component: MapStoreComponent},
    { path: 'back/addstores', component: AddStoreComponent}

];
