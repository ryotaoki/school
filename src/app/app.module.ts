import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './secure/topbar/topbar.component';
import { ProductComponent } from './secure/product/product.component';
import { ProductdetailComponent } from './secure/productdetail/productdetail.component';
import { RegistrationComponent } from './public/registration/registration.component';
import { ContactComponent } from './secure/contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SecureComponent } from './secure/secure.component';
import { PublicComponent } from './public/public.component';

import { ProductlistComponent } from './secure/productlist/productlist.component';
import { CommonModule } from '@angular/common';
import { BuyComponent } from './secure/buy/buy.component';

const appRoutes: Routes = [
  
  { path : '', component : ProductlistComponent},
  { path : 'details/title/:t/price/:p/description/:d/quantity/:q' , component : ProductdetailComponent},

  
  { path : 'registration', component : RegistrationComponent},
  { path : 'contacts', component : ContactComponent},
  

];



@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    ProductComponent,
    ProductdetailComponent,
    RegistrationComponent,
    ContactComponent,
    SecureComponent,
    PublicComponent,
    
    ProductlistComponent,
    
    BuyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
