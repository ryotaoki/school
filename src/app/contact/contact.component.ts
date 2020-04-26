import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  
})
export class ContactComponent implements OnInit {
  username: any='';
  email: any;
  desc:String;
  supportdata: FormGroup;
  submitted = false;
  types = ['Order Issues', 'Account Issues', 'Others'];
  constructor(  private formBuilder: FormBuilder,private messageService:MessageService
    ) { }

  ngOnInit() {
    this.supportdata = this.formBuilder.group({
      username:['',Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      file: ['']
    });
  }
  get f() { return this.supportdata.controls; }
  onSubmit() {
    debugger;
    this.username='';
    this.email='';
    this.desc='';
    debugger;
    this.submitted = true;
    this.messageService.add(
      { life: 5000, severity: 'success', summary: 'Success', detail: 'Message sent successfully!' }
      );
    if (this.supportdata.invalid) {
      return;
    }
   
  }
}
