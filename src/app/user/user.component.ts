import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  name!: string;
  email!: string;
  password!: string;
  phone!: string;
  eircode!:string;

  constructor( @Inject(String) FullName: string,@Inject(String) Email: string,@Inject(String)  Password: string, @Inject(String) Phone: string, @Inject(String)Eircode: string) {
    this.name = FullName;
    this.email = Email;
    this.password = Password;
    this.email = Email;
    this.eircode = Eircode;
  }
}
