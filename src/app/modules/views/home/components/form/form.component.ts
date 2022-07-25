import { formatCurrency } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder, ValidationErrors } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { addPost } from 'src/app/core/state/app.actions';
import { PostState } from 'src/app/core/state/app.state';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  testForm: FormGroup;
  @Output() activateTab = new EventEmitter<any>();
  submitted: boolean = true;

  genders: SelectItem[];

  description: string;
  minDateValue = new Date();
  maxDateValue: any;
  max = this.getMaxDate(5);
  options: any;
   
  getMaxDate(days: any) {
    const theDate = new Date();
    return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
  }
  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private store: Store<PostState>) {
      
     }

  ngOnInit() {
    this.options = [
      { label: 'Select City', value: null },
      { label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } },
      { label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } },
      { label: 'London', value: { id: 3, name: 'London', code: 'LDN' } },
      { label: 'Iran', value: { id: 4, name: 'Tehran', code: 'IR' } }
    ];
    this.maxDateValue = this.max;
    this.testForm = this.fb.group({
      'amount': new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      'startDate': new FormControl('', Validators.required),
      'statuses': new FormControl('', Validators.required),
      'fund-src': new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]),
    });
  }

  onSubmit(value: string) {
    this.submitted = true;
    const post = this.testForm.value;
    this.store.dispatch(addPost({ post }));
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Form Submitted', sticky: true });
  }
 
  get diagnostic() { return JSON.stringify(this.testForm.value); }

}
