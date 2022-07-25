import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PersonState, PostState, SrcState } from 'src/app/core/state/app.state';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(
    private store: Store<PostState>,
    private store1: Store<SrcState>,
    private store2: Store<PersonState>
  ) { }
  storeData: any;
  ngOnInit(): void {
    this.store.select('posts').subscribe(
      developers => console.log(developers)
    );

    this.store1.select('src').subscribe(res => {
      console.log('src store data:   ', res);
      this.storeData = res;
    });

    this.store2.select('person').subscribe(res => {
      console.log('person store data:   ', res);
      this.storeData = res;
    })
    
  }

}

