import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DashboardService} from '../../shared/services/dashboard.service';
import {GlobalService} from '../../shared/services/global.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  closeBtnName: string;
  userForm: FormGroup;
  user;
  mode;
  numberRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;

  constructor(public bsModalRef: BsModalRef, private fb: FormBuilder, private dashboardService: DashboardService, private globalService: GlobalService) {
    this.userForm = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      contactNumber: ['', Validators.compose([Validators.pattern(this.numberRegex)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      roleType: ['Admin', Validators.compose([Validators.required, Validators.email])]
    });

  }

  ngOnInit(): void {
   if(this.mode === 'edit') {
     this.userForm.patchValue({
       name: this.user.name,
       contactNumber: this.user.contactNumber,
       email: this.user.email,
       roleType: this.user.roleType
     });
   }

  }
  addorEditUser() {
    if(this.mode === 'add'){
      this.dashboardService.addUser(this.userForm.value).subscribe((res) => {
        this.bsModalRef.hide();
        this.globalService.selectedUserChange.emit(res);


      });
    }
    else{
      this.dashboardService.updateUser(this.userForm.value, this.user._id).subscribe((res) => {
        this.bsModalRef.hide();
        this.globalService.selectedUserChange.emit(res);


      });

    }
  }

}
