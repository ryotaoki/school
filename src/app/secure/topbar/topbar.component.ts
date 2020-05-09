import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
// import { NgModule } from '@angular/core';





@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  public isCollapsed = false;
  
  constructor(private router: Router, public prodService: ProductService) { }

  setCategory(category){
    this.prodService.category = category;
    
  }
  goTo(link){
    this.router.navigate([link]);

  }

  ngOnInit(): void {
  }

}
