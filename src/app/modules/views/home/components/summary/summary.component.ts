import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PostState } from 'src/app/core/state/posts.state';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(private store: Store<PostState>) { }
  storeData:any;
  ngOnInit(): void {
    this.store.select('posts').subscribe(res => {
      this.storeData = res[res.length-1];
      console.log('store data:   ', this.storeData);
    })
  }

}

 