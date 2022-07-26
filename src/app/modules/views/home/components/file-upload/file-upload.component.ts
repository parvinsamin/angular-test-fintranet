import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { ChangeTabService } from 'src/app/core/services/change-tab.service';
import { addSrc } from 'src/app/core/state/app.actions';
import { PostState } from 'src/app/core/state/app.state';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  storeData: any;
  private imageSrc: string = '';
  constructor(
    private http: HttpClient,
    private _sanitizer: DomSanitizer,
    private messageService: MessageService,
    private store: Store<PostState>) {
  }

  ngOnInit() {

  }

 
  upload(e: any) {
    var file = e?.files ? e.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) { 
      this.messageService.add({ severity: 'error', summary: 'Service Message', detail: 'invalid format! \n' });
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  
  _handleReaderLoaded(e:any) {
    let reader = e.target; 
    const src = this._sanitizer.bypassSecurityTrustUrl(reader.result)
    this.store.dispatch(addSrc({ src}));
    if (src) { 
      this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'File is valid, and was successfully uploaded.\n' });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Service Message', detail: 'Possible file upload attack! \n' });
    }
  }

  

  uploadViaPhp(event: any) {
    var formData = new FormData();
    formData.append('filename', event.files[0])
    this.http.post(environment.baseDomain + 'upload.php', formData)
      .subscribe(result => {
      
        if (result) {
          this.store.dispatch(addSrc({ src: result }));
          this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'File is valid, and was successfully uploaded.\n' });
        } else {
          this.messageService.add({ severity: 'error', summary: 'Service Message', detail: 'Possible file upload attack! \n' });
        }
      })
  }


}
