import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Regform2Component } from './regform2/regform2.component';

import { HttpHeaders, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    Regform2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [

  ],
  bootstrap: [Regform2Component]
})

export class AppModule { }
