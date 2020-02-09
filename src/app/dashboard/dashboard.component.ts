import { Component, OnInit, EventEmitter } from '@angular/core';
import {DashboardService} from '../shared/services/dashboard.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {ModalComponent} from '../core/modal/modal.component';
import {init} from 'protractor/built/launcher';
import {GlobalService} from '../shared/services/global.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  bsModalRef: BsModalRef;

  tableHeaders = ['Name', 'Email', 'Role Type', 'Status', ''];
  users: Array<object>;
  statusImages = {
    'Pending': '../../assets/ico_pending.svg' ,
    'Active': '../../assets/ico_active.svg',
    'Inactive': '../../assets/ico_inactive.svg'
  };

  constructor(private dashboardService: DashboardService, private modalService: BsModalService, private globalService: GlobalService) {
    this.users = [];

  }

  ngOnInit(): void {
    this.globalService.selectedUserChange
      .subscribe((user) => {
        this.getUsers();
      });
    this.getUsers();
  }
  getUsers() {
    this.dashboardService.getUsers().subscribe((res) => {
      this.users = res;
    });
  }
  getStatusImages(status) {
    return this.statusImages[status];
  }
  openModalWithComponent(mode, user?) {
    const initialState = {
     user: mode === 'edit' ? {...user} : {},
      title: 'Modal with component',
      mode: mode
    };
    this.bsModalRef = this.modalService.show(ModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.content.user = initialState.user;
  }
}
