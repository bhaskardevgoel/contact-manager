import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  isFilter: boolean = false;
    toggleFilter(){
      this.isFilter = !this.isFilter;
    }

  constructor() { }

  ngOnInit(): void {
  }

}
