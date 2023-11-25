import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';

import { RegisterDataService } from '../service/register-data.service';
import { UserComponent } from '../user/user.component';


@Component({
  selector: 'app-regform2',
  templateUrl: './regform2.component.html',
  styleUrl: './regform2.component.css',
  providers: [RegisterDataService, UserComponent]
})
export class Regform2Component {



  email!: string;
  fullName!: string;
  password!: string;
  phone!: string;
  eircode!: string;

  constructor(private regService: RegisterDataService) { }

  onSubmit() {
    const formData = new FormData();

    
    console.log('Registration form submitted!');
    console.log(`Name: ${this.fullName}`);
    console.log(`Email: ${this.email}`);
    console.log(`Password: ${this.password}`);
    console.log(`Phone: ${this.phone}`);
    console.log(`Eircode: ${this.eircode}`);

    var user = new UserComponent(this.fullName,this.email,this.password,this.phone,this.eircode);

    console.log(`User: \n ${JSON.stringify(user)}`);

    this.regService.addUser(user);
    
  }

  OnInit(){
  }

}

