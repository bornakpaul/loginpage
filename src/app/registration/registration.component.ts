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

RegisterUser(){
    // if(this.username == "Admin" && this.password == "admin123"){
    //   console.log("Welcome Admin");
    // }

  let user = this.username;
  let pass = this.password;

  let myObj = {
    user: user,
    pass: pass,
};

  if(localStorage.getItem('users') == null){
    localStorage.setItem('users','[]');
}

if(localStorage.getItem('username') == null){
  localStorage.setItem('username','[]');
}

let old_data = JSON.parse(localStorage.getItem('users')!);
old_data.push(myObj);

let old_username = JSON.parse(localStorage.getItem('username')!);
old_username.push(user);

let myObj_serialized = JSON.stringify(old_data);
let username_serialized = JSON.stringify(old_username);

localStorage.setItem('users', myObj_serialized);
localStorage.setItem('username', username_serialized);

let myObj_deserialized = JSON.parse(localStorage.getItem('users')!);
let username_deserialized = JSON.parse(localStorage.getItem('username')!);
// console.log(myObj_deserialized);

const loginDeets = JSON.parse(localStorage.getItem('users')!);
const loginDeets_username = JSON.parse(localStorage.getItem('username')!);
console.log(loginDeets_username);
console.log(loginDeets);

}
}
