import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './secure.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ContactComponent } from './contact/contact.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { BuyComponent } from './buy/buy.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { FormsModule,ReactiveFormsModule } from '@angular/forms';
// what this?
import { MessageService } from 'primeng/api';
import {ProductService} from './services/product.service';





const secureRoutes: Routes = [
  {path : '', component: SecureComponent, children : [
    {path : '', component: BuyComponent, children :[ 
      {path: '', component: ProductlistComponent},
      // { path : 'details/title/:t/price/:p/description/:d/quantity/:q' , component : ProductdetailComponent},
      { path : 'details/:id' , component : ProductdetailComponent},

    ]},
    {path : 'contact', component: ContactComponent},
    

  ]}

];



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
    NgbModule,
    // FormGroup,
     // FormsModule,
    ReactiveFormsModule,
  ],
  providers: [MessageService, ProductService],
  bootstrap: [SecureComponent]
})
export class SecureModule { }
