import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { FilterComponent } from './filter/filter.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { AddcontactComponent } from './addcontact/addcontact.component';



@NgModule({
  declarations: [
    NavComponent, 
    ContactComponent, 
    FilterComponent, 
    MeetingsComponent, AddcontactComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavComponent, 
    ContactComponent, 
    FilterComponent, 
    MeetingsComponent
  ]
})
export class LayoutModule { }
