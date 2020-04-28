import { Component, OnInit, ViewChild } from '@angular/core';
import{NgForm} from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  @ViewChild("f") frm: NgForm;
  constructor(private router: Router) { }

  loginUser(){

    console.log(this.frm);
    console.log(this.frm.invalid);
    console.log(this.frm.valid);
     if(this.frm.value.email =="ryota@gmail.com" && this.frm.value.password =="abcd"){
        this.router.navigate(['/welcome']);
        } else {
         alert("wrong crendential")
       }

  }



  

  ngOnInit(): void {
  }

}
