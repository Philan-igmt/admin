import { NgModule } from '@angular/core';
import { RouterModule, Routes ,CanActivate} from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { AppointmentsComponent } from './layouts/appointments/appointments.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { 
  AuthGuardService as AuthGuard 
} from '../app/auth/auth-guard.service';
// import { LoginComponent } from './login/login.component';
import { EquipmentsComponent } from './layouts/equipments/equipments.component';
import { QuoteComponent } from './layouts/quote/quote.component';
import { PlaatersComponent } from './layouts/plaaters/plaaters.component';
import { OrdersComponent } from './layouts/orders/orders.component';
import { EmployeesComponent } from './layouts/employees/employees.component';
import { EmployeeListComponent } from './layouts/employee-list/employee-list.component';
import { EquipmentListComponent } from './layouts/equipment-list/equipment-list.component';
import { ServicesComponent } from './layouts/services/services.component';
import { UsersComponent } from './layouts/users/users.component';
import { ReviewsComponent } from './layouts/reviews/reviews.component';
import { LoginComponent } from './layouts/login/login.component';



const routes: Routes = [
  {
    path:'',
    component:DefaultComponent,
    children:[
      {
      path:'',
      component:DashboardComponent,

      },
    {path:'appointment',
    component:AppointmentsComponent,
    },
    {path:'employee',
    component:EmployeesComponent,
    },
    {path:'emeployeeList',
    component:EmployeeListComponent,
    },
    {path:'addEquipment',
    component:EquipmentsComponent,
    },
    {path:'equipmentList',
    component:EquipmentListComponent,
    },
    {path:'platters',
    component:PlaatersComponent,
    canActivate: [AuthGuard] 
    },
    {path:'orders',
    component:OrdersComponent,
    canActivate: [AuthGuard] 
    },
    {path:'services',
    component:ServicesComponent,
    },
    {path:'users',
    component:UsersComponent,
    },
    {path:'reviews',
    component:ReviewsComponent,
    },
    {path:'quotes',
    component:QuoteComponent,
    },
     
    {path:'login', component:LoginComponent},
    { path: '**', redirectTo: 'login' }
  ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
