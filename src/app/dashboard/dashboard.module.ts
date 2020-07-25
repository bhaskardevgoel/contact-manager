import { LayoutModule } from './layout/layout.module';
import { DashboardComponent } from './dashboard.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [DashboardComponent, UserComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutModule
  ]
})
export class DashboardModule { }
