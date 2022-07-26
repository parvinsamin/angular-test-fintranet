import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { Person } from "src/app/core/services/persons";
import { TableRowDragService } from "src/app/core/services/table-row-drag.service";
import { addRow } from "src/app/core/state/app.actions";
import { PostState } from "src/app/core/state/app.state";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [TableRowDragService]
})
export class TableComponent implements OnInit {
  busyGetUser: Subscription;
  users: Person[];

  constructor(private _userApi: TableRowDragService,private store: Store<PostState>) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.busyGetUser = this._userApi.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  addRowData(row:any) {  
    this.store.dispatch(addRow({ person:row }));
  }

 
}
