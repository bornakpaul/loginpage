import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'pm-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  //newlstUsers: any = [];

  pageTitle: string = 'User Details';
  local = JSON.parse(localStorage.getItem("users")!);
  closeResult: string | undefined;
  content: any;
  updateForm!: any;


  constructor(private modalService: NgbModal, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.local;

    this.updateForm = this.fb.group({
      username: ['',Validators.required],
      password: ['',[Validators.required, Validators.minLength(8)]],
      confirmpassword: ['', Validators.required],
      gender: ['', Validators.required],
      phone:['',[Validators.required, Validators.maxLength(8)]],
      email: ['',[Validators.required, Validators.email]]
    });
  }


  deleteUser(index: any){
    if(index){
      this.local.splice(index, 1);
      localStorage.setItem("users", JSON.stringify(this.local));
    }
  }

  editItem(userModel: any){
    const ref = this.modalService.open(PopupComponent);
    ref.componentInstance.selectedUser = userModel;

    ref.result.then((yes)=>{
      console.log('Clicked Okay');
    },
    (cancel)=>{
      console.log('Canceled');
    });
  }

  // open(content: any) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }
  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }

  // UpdateUser(){

  //   if(localStorage.getItem('updateuser') == null){
  //        localStorage.setItem('updateuser','[]');
  //      }
  
  //       let old_data = JSON.parse(localStorage.getItem('updateuser')!);
  //       // old_data.push(this.updateForm.value);
  //       //old_data[index] = this.updateForm.value;
  
  
  //       let myObj_serialized = JSON.stringify(old_data);
  //       localStorage.setItem('updateuser', myObj_serialized);
  // }

}

