import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { PublicComponent } from './public.component';

const publicRoutes: Routes = [
  {path : '', component : LoginComponent},
  {path : 'register', component : RegistrationComponent}
]





@NgModule({
  declarations: [
    PublicComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    RouterModule.forChild(publicRoutes),
    CommonModule,
    FormsModule,
    CommonModule,
  ]
})
export class PublicModule { }
