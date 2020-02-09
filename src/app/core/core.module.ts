import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import {BsModalService} from 'ngx-bootstrap';
import {ModalModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {DashboardService} from '../shared/services/dashboard.service';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()],
  exports : [ModalComponent],
  entryComponents: [ModalComponent],
  providers: [DashboardService]


})
export class CoreModule { }
