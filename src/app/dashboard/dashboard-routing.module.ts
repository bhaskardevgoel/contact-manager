import { MeetingsComponent } from './layout/meetings/meetings.component';
import { ContactComponent } from './layout/contact/contact.component';
import { DashboardComponent } from './dashboard.component';
import { UserComponent } from './user/user.component';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcontactComponent } from './layout/addcontact/addcontact.component';

const routes: Routes = [
  {path:'user', redirectTo:'user/dashboard/contacts', pathMatch:"full"},
  {path:'user', 
  component: DashboardComponent, 
  children:[
    {path:'dashboard', component: UserComponent, 
    children:[
      {path:'contacts', component: ContactComponent},
      {path:'meetings', component: MeetingsComponent},
      {path:'addcontact', component:AddcontactComponent}
    ]}
    
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
