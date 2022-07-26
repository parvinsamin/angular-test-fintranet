import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { HttpClientModule } from '@angular/common/http';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { FormComponent } from './components/form/form.component';
import { SummaryComponent } from './components/summary/summary.component';
import { TableComponent } from './components/table/table.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    FileUploadComponent,
    FormComponent,
    TableComponent,
    SummaryComponent,
  ],
  imports: [ 
    CommonModule,
    HttpClientModule, 
    HomeRoutingModule,
    SharedModule,
    
    // StoreModule.forRoot({ posts: PostReducer, src: SrcReducer, person: TableRowReducer })
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
