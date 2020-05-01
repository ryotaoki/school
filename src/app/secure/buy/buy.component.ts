import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  constructor(public prodService: ProductService) { }

  Myresearch='';
  // category='speaker';

  delete(){
    this.Myresearch = '';
  }

  ngOnInit(): void {
  }

}
