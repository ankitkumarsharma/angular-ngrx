import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './auth/login/login.component';



@NgModule({
  declarations: [
    ContactComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ContactComponent]
})
export class SharedModule { }
