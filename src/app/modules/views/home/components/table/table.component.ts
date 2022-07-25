import { Component, OnInit } from "@angular/core";  
import { Subscription } from "rxjs";
import { moveItemInArray, CdkDragDrop } from "@angular/cdk/drag-drop";
import { TableRowDragService } from "src/app/core/services/table-row-drag.service";
import { Person } from "src/app/core/services/persons";
import { PersonState, PostState } from "src/app/core/state/app.state";
import { Store } from "@ngrx/store";
import { addRow } from "src/app/core/state/app.actions";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [TableRowDragService]
})
export class TableComponent implements OnInit {
  busyGetUser: Subscription;
  users: Person[];

  constructor(private _userApi: TableRowDragService,private store: Store<PersonState>) { }

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
