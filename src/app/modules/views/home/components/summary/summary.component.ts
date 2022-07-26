import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PostState } from 'src/app/core/state/app.state';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  images: any;
  formData: any;
  persons: any = [];
  constructor(
    private store: Store<PostState>
  ) { }
  storeData: any;
  ngOnInit(): void {
    this.store.select('posts').subscribe(
      results => {  
        this.formData =  results.posts.post
        this.images =  results.src.src ;
        this.persons  =  results.person.persons ;
      } 

    );


  }

}

