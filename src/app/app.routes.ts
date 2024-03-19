import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { SalesComponent } from './sales/sales.component';
import { EventsComponent } from './events/events.component';
import { SalesDetailComponent } from './sales-detail/sales-detail.component';
import { EventsDetailComponent } from './events-detail/events-detail.component';

export const routes: Routes = [
    {path:'dashboard', component: DashboardComponent},
    {path:'user', component: UserComponent},
    {path:'user/:id', component: UserDetailComponent},
    {path:'customer', component: CustomerComponent},
    {path:'customer/:id', component: CustomerDetailComponent},
    {path:'sales', component: SalesComponent},
    {path:'sales/:id', component: SalesDetailComponent},
    {path:'events', component: EventsComponent},
    {path:'events/:id', component: EventsDetailComponent}
];
