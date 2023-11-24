import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css'
})
export class RegistrationFormComponent {
  name!: string;
  email!: string;
  password!: string;
  phone!: string;
  eircode!:string;




  Contstructor(){
    this.name = "Your Name";
    this.email = "Your Email Address";
    this.password = "";
    this.phone = "Your mobile number";
    this.eircode ="Your Eircode";
  }

  onSubmit() {
    console.log('Registration form submitted!');
    console.log(`Name: ${this.name}`);
    console.log(`Email: ${this.email}`);
    console.log(`Password: ${this.password}`);
    console.log(`Phone: ${this.phone}`);
    console.log(`Eircode: ${this.eircode}`)
  }

  OnInit(){
  }
}
