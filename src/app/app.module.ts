import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { MessageService } from 'primeng/api';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AddproductComponent } from './secure/addproduct/addproduct.component';
// import { CartComponent } from './secure/cart/cart.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { FormsModule,ReactiveFormsModule } from '@angular/forms';


const appRoutes: Routes = [
  
 {path: '', loadChildren : () => import('./public/public.module').then((m) => m.PublicModule)},
 {path:'welcome', loadChildren : () => import('./secure/secure.module').then((m) => m.SecureModule)}
  

];



@NgModule({
  declarations: [
    AppComponent,
    // AddproductComponent,
    // CartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    // NgbModule,
    // FormsModule,
    // ReactiveFormsModule,
    
    
  ],
  // providers: [MessageService],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
