import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { SummaryComponent } from './components/summary/summary.component';
import { HttpClientModule } from '@angular/common/http';

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
    SharedModule
  ],
  providers: [],
  // bootstrap: [HomeComponent]
})
export class HomeModule { }
