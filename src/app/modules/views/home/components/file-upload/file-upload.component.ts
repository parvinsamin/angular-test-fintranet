import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { Post } from 'src/app/core/models/post.model';
import { ChangeTabService } from 'src/app/core/services/change-tab.service';
import { addPost, addSrc } from 'src/app/core/state/posts.actions';
import { PostState } from 'src/app/core/state/posts.state';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit { 
  storeData: any;
  constructor(
    private http: HttpClient,
    private changeTabService: ChangeTabService,
    private messageService: MessageService,
    private store: Store<PostState>) {  
  }

  public ngOnInit() {
    
  }

  uploadedFiles: any[] = [];


  upload(event: any) {
    var formData = new FormData();
    formData.append('filename', event.files[0])
    this.http.post(environment.baseDomain + 'upload.php', formData)
      .subscribe(result => {
        if (result) { 
          this.store.dispatch(addSrc({src:result}));
          this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'File is valid, and was successfully uploaded.\n' });
        } else {
          this.messageService.add({ severity: 'error', summary: 'Service Message', detail: 'Possible file upload attack! \n' });
        }
      })
  }

   
}
