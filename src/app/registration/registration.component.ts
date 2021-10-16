import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'pm-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  title = 'localStorage';
  registrationForm!: any;
  // username:string | undefined;
  // password:string | undefined;

  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    this.registrationForm = this.fb.group({
      username: ['',Validators.required],
      password: ['',[Validators.required, Validators.minLength(8)]],
      confirmpassword: ['', Validators.required],
      gender: ['', Validators.required],
      phone:['',[Validators.required, Validators.maxLength(8)]],
      email: ['',[Validators.required, Validators.email]]
    });
  }
  //onSubmit(){
  //localStorage.setItem("users", JSON.stringify(this.registrationForm.value));
  //}

RegisterUser(){

  if(localStorage.getItem('users') == null){
    localStorage.setItem('users','[]');
}

if(localStorage.getItem('username') == null){
  localStorage.setItem('username','[]');
}

let old_data = JSON.parse(localStorage.getItem('users')!);
old_data.push(this.registrationForm.value);

// let old_username = JSON.parse(localStorage.getItem('username')!);
// old_username.push(user);

let myObj_serialized = JSON.stringify(old_data);
// let username_serialized = JSON.stringify(old_username);

localStorage.setItem('users', myObj_serialized);
// localStorage.setItem('username', username_serialized);

// let myObj_deserialized = JSON.parse(localStorage.getItem('users')!);
// let username_deserialized = JSON.parse(localStorage.getItem('username')!);
// console.log(myObj_deserialized);

// const loginDeets = JSON.parse(localStorage.getItem('users')!);
// const loginDeets_username = JSON.parse(localStorage.getItem('username')!);
// console.log(loginDeets_username);
// console.log(loginDeets);
}
  
}

