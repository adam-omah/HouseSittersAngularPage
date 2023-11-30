import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UserComponent } from '../user/user.component';


@Injectable({
  providedIn: 'root'
})


export class RegisterDataService {
  constructor(private http: HttpClient) {

  }


  private apiBaseUrl = 'http://localhost:3000/api/heroes';


  public addUser(user:UserComponent){
    console.log("Entered Add User");
    this.http.post(this.apiBaseUrl, JSON.stringify(user) );
  }

}
