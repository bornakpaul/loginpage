import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string | undefined;
  password:string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

LoginUser(){

  let loginuser = this.username;
  let loginpass = this.password;


//! start here

if (localStorage.getItem('username')) {
  const loginDeets = JSON.parse(localStorage.getItem('username')!);
  // console.log(loginDeets);
  if(loginDeets.includes(loginuser)){
    console.log("User Data is already present");
  }else{
    console.log("User Data is not present");
  }
}

}
}
