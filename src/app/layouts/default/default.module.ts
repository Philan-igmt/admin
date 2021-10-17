import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AppointmentsComponent } from 'src/app/modules/appointments/appointments.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
// import { AppointmentsComponent } from '../../modules/appointments/appointments.component';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    AppointmentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule
  ]
})
export class DefaultModule { }
