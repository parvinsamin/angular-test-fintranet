import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: any;
  activeItem: MenuItem;
  locationId: any;
  selected: number = 0;
  constructor(
    public activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.items = [{
      id: 1,
      header: 'Step 1',
      icon: 'fa fa-fw fa-file',
      routerLink: '/step1',
      routerLinkActiveOptions: '{ exact: true }'
    }, {
      id: 2,
      header: 'Step 2',
      routerLink: '/step1',
      routerLinkActiveOptions: '{ exact: true }'
    }, {
      id: 3,
      header: 'Step 3',
      routerLink: '/step3',
      routerLinkActiveOptions: '{ exact: true }'
    }, {
      id: 4,
      header: 'Step 4',
      routerLink: '/step4',
      routerLinkActiveOptions: '{ exact: true }'
    }
    ];

    this.activeItem = this.items[0];
    // this.activatedRoute.queryParams.subscribe(params => {
    //   let id = params['id'];
    //   console.log('Id ', id)
    //   this.selected = this.items[id];
    // }); 
    console.log('event', location.host)

  }

  setActiveTab(event:any) {  
    let index = event.index;
    const t = index +1
    const domain = 'step'+t;
    console.log(domain)
  //  this.router.navigate([domain], { queryParamsHandling: 'merge' });
  }
  tabIndex = 0;
  activeTab = 0;
  
  switchHeaders(tabNumber: any) {
    this.activeTab = tabNumber.index;
  }
}
