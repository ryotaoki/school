import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor() { }

  speakerList =[
    {title: 'Bose', description: 'Bose description', price: '1200', quantity: 18},
    {title: 'Sony', description: 'Sony description', price: '1300', quantity: 12},
    {title: 'speaker 2', description: 'speaker 2 description', price: '1100', quantity: 34},
    {title: 'speaker 3', description: 'speaker 3 description', price: '1400', quantity: 12},
    {title: 'speaker 4', description: 'speaker 4 description', price: '1600', quantity: 14},
    {title: 'speaker 5', description: 'speaker 5 description', price: '7200', quantity: 21},
    {title: 'speaker 6', description: 'speaker 6 description', price: '1800', quantity: 24},
    {title: 'speaker 7', description: 'speaker 7 description', price: '1300', quantity: 10},
    {title: 'speaker 8', description: 'speaker 8 description', price: '1500', quantity: 26},
    {title: 'speaker 9', description: 'speaker 9 description', price: '2400', quantity: 9},
  ]

  phonesList= [1,2,3,4,5];
  booksList= [1,2,3,4,5,6,7];
  category = 'speaker';



  ngOnInit(): void {
  }

}
