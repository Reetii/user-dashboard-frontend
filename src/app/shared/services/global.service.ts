import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public selectedUserChange = new EventEmitter();

  constructor() { }
}
