import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'pm-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  updateForm!: any;
  userModel: any;
  editForm: FormGroup | undefined;
  selectedUser: any;

  constructor(private modalService: NgbModal,  private fb: FormBuilder) { }

  ngOnInit(): void {
   // this.setForm();
  }

  //get editFormData(){return this.editForm?.controls;}

  // private setForm(){
  //   console.log(this.selectedUser);

  //   this.editForm = this.fb.group({
  //     username: [this.selectedUser.username],
  //     email: [this.selectedUser.email],
  //     gender: [this.selectedUser.gender],
  //     phone: [this.selectedUser.phone],
  //     password: [this.selectedUser.password],
  //     confirmpassword: [this.selectedUser.confirmpassword]
  //   });
  // }

}
