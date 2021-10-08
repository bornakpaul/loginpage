import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  username:string | undefined;
  password:string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  LoginUser(){
    if(this.username == "Admin" && this.password == "admin123"){
      console.log("Welcome Admin");
    }
  }

}
