import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RegistrationFormComponent } from './registration-form/registration-form.component';

import { HttpHeaders, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    RegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [RegistrationFormComponent]
})

export class AppModule { }
