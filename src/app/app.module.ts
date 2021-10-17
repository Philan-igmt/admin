import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {SidenavModule} from 'angular-ng-sidenav';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { DefaultModule } from './layouts/default/default.module';
import { HttpClientModule } from '@angular/common/http';
import { AppointmentsComponent } from './layouts/appointments/appointments.component';
import { EquipmentsComponent } from './layouts/equipments/equipments.component';
import { QuoteComponent } from './layouts/quote/quote.component';
import { PlaatersComponent } from './layouts/plaaters/plaaters.component';
import { OrdersComponent } from './layouts/orders/orders.component';
import { UsersComponent } from './layouts/users/users.component';
import { ServicesComponent } from './layouts/services/services.component';
import { EmployeesComponent } from './layouts/employees/employees.component';
import { EmployeeListComponent } from './layouts/employee-list/employee-list.component';
import { EquipmentListComponent } from './layouts/equipment-list/equipment-list.component';
import { ReviewsComponent } from './layouts/reviews/reviews.component';
import { AuthGuardService } from './auth/auth-guard.service';






@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    EquipmentsComponent,
    QuoteComponent,
    PlaatersComponent,
    OrdersComponent,
    UsersComponent,
    ServicesComponent,
    EmployeesComponent,
    EmployeeListComponent,
    EquipmentListComponent,
    ReviewsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    BrowserAnimationsModule,
    DefaultModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
