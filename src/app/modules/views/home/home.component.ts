import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: MenuItem[];  
  activeItem: MenuItem;
  locationId:any;
  constructor(public activatedRoute:ActivatedRoute) { }

  ngOnInit() { 
    this.items = [
      { label: 'Step 1', icon: 'fa fa-fw fa-bar-chart', url: 'step1?id=0', },
      { label: 'Step 2', icon: 'fa fa-fw fa-calendar' , url: 'step2?id=1' },
      { label: 'Step 3', icon: 'fa fa-fw fa-book', url: 'step3?id=2'  },
      { label: 'Step 4', icon: 'fa fa-fw fa-support', url: 'step4?id=3'  }, 
    ]; 
    this.activeItem = this.items[0];
    this.activatedRoute.queryParams.subscribe(params => {
      let id = params['id'];
      this.activeItem = this.items[id]; 
   });
    console.log(this.locationId)
  

 
  }

  setActiveTab(event: any) {
    console.log(event)
    debugger
    this.activeItem = this.items[event];
  }

}
