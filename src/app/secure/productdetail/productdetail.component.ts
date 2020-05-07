import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  // speaker= {title: '', price: '', description: '', quantity: null}
  productList;
  speaker = null;
  selectedId;
  category;


  constructor(private route: ActivatedRoute, private prodService : ProductService) { }

  ngOnInit() {
    this.selectedId= this.route.snapshot.params['id'];
    this.category=this.route.snapshot.params['cat'];

    this.prodService.getProducts().subscribe((data)=>{
      this.productList=data[this.category];
      for(let i = 0; i < this.productList.length; i++){
        if(this.selectedId == this.productList[i].id){
          this.speaker = this.productList[i];
        }
      }
    }

    )


    // if(this.prodService.category == "speakers"){
    //   this.productList = this.prodService.speakers
    // } else if (this.prodService.category=="books") {
    //   this.productList = this.prodService.books
    // } else if(this.prodService.category=="phones"){
    //   this.productList = this.prodService.phones
    // }

    // for(let i = 0; i < this.productList.length; i++){
    //   if(this.selectedId == this.productList[i].id){
    //     this.speaker = this.productList[i];
    //   }
    // }
    

    // this.speaker.title = this.route.snapshot.params['t'];
    // this.speaker.price = this.route.snapshot.params['p'];
    // this.speaker.description= this.route.snapshot.params['d'];
    // this.speaker.quantity = this.route.snapshot.params['q'];

  }

}
