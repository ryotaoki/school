import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{

  isDisabled;
  bgColor = 'red';
  color = 'rgb(0,0,255)';
  size = 16
  isOK = true;

  @Input() speaker :{title: string, description: string, price: string, quantity: number};

  increase(){
    this.size++;
    
    if(this.size > 20){
        this.isOK = false;
    }
}

decrease(){
    this.size--;
    if(this.size < 20){
        this.isOK = true;
    }
}



checkAvailability(){

    this.isDisabled = true;
    return this.isDisabled

}

hello(){
    alert("aaaa");
}

buy(e: Event){
    console.log(e)
    this.speaker.quantity--;
    if(this.speaker.quantity == 0){
        alert("we are sorry. this product is out of sale.")
    }
}


  

  constructor() { }

  ngOnInit(): void {
  }

}
