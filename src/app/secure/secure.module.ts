import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './secure.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ContactComponent } from './contact/contact.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { BuyComponent } from './buy/buy.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


const secureRoutes: Routes = [
  {path : '', component: SecureComponent, children : [
    {path : '', component: BuyComponent, children :[ 
      {path: '', component: ProductlistComponent},
      { path : 'details/title/:t/price/:p/description/:d/quantity/:q' , component : ProductdetailComponent},

    ]},
    {path : 'contact', component: ContactComponent},
    

  ]}

]



@NgModule({
  declarations: [
    SecureComponent,
    TopbarComponent,
    ProductComponent,
    ProductdetailComponent,
    ProductlistComponent,
    ContactComponent,
    BuyComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(secureRoutes),
  ]
})
export class SecureModule { }
