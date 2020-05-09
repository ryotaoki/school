import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  addingForm : FormGroup;
  category;


  constructor() { }

  ngOnInit(): void {
    this.addingForm = new FormGroup({
      // 'fname' : new FormControl('hello'),  this is will reaturn "hello" in the input like placeholder.
      'idName' : new FormControl(null, Validators.required),
      'productName' : new FormControl(null, Validators.required),
      // 'email' : new FormControl(null, Validators.required), it wll return if there is nothing in side email it will be invalid, but if there is something it will gives valid.
    //  down below its array required and required email means that it must be have @.
      'productDescription' : new FormControl(null, [Validators.required,]),

      'quantity' : new FormControl(null,[Validators.required,] ),
      'price' : new FormControl(null,[Validators.required, ]),
      'image' : new FormControl(null,[Validators.required, ]),



    }); 

  }


  add(){
    console.log(this.addingForm.value.idName);
    console.log(this.addingForm.value.productName);
    console.log(this.addingForm.value.productDescription);
    console.log(this.addingForm.value.quantity);
    console.log(this.addingForm.value.price);
    console.log(this.addingForm.value.image);
    console.log(this.category);







  }

}
