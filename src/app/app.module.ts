import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HousePostListComponent } from './house-post-list/house-post-list.component';

import { HttpHeaders, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HousePostListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [

  ],
  bootstrap: [HousePostListComponent]
})

export class AppModule { }
