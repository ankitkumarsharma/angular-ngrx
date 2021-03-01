import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './auth/login/login.component';
import { sharedEffects } from './auth/core/effects';
import { StoreModule,  } from '@ngrx/store';
import { sharedReducer, metaReducers } from './auth/core/reducers';
import { EffectsModule } from '@ngrx/effects';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    ContactComponent,
    LoginComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forRoot(sharedReducer, {metaReducers}),
    EffectsModule.forRoot(sharedEffects),
  ],
  exports: [ContactComponent]
})
export class SharedModule { }
