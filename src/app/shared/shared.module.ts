import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { TabMenuModule } from 'primeng/tabmenu';
import { ToastModule } from 'primeng/toast';
import {PanelModule} from 'primeng/panel';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {AvatarModule} from 'primeng/avatar';

@NgModule({
  declarations: [],
  imports: [
    CardModule,
    TabMenuModule,
    FileUploadModule, 
    ReactiveFormsModule, 
    MessagesModule,
    MessageModule,
    PanelModule,
    TableModule,
    CalendarModule,
    DragDropModule,
    AvatarModule,
    DropdownModule,
    ToastModule
  ],
  providers: [MessageService],

  exports: [
    CardModule,
    TabMenuModule,
    FileUploadModule,
    ReactiveFormsModule, 
    MessagesModule,
    TableModule,
    DragDropModule,
    MessageModule,
    AvatarModule,
    PanelModule,
    CalendarModule,
    DropdownModule,
    ToastModule
  ]
})
export class SharedModule { }
