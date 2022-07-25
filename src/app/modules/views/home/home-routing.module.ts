import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { FormComponent } from './components/form/form.component';
import { SummaryComponent } from './components/summary/summary.component';
import { TableComponent } from './components/table/table.component';
import { HomeComponent } from './home.component';

   
 
 

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: FileUploadComponent
      }, 
      {
        path: 'step1',
        component: FileUploadComponent
      },
      {
        path: 'step2',
        component: FormComponent
      },
      {
        path: 'step3',
        component: TableComponent
      },
      {
        path: 'step4',
        component: SummaryComponent
      },
    ]
  } 
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

 
 
 
 