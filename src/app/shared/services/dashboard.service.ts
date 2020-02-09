import { Injectable } from '@angular/core';
import {AppUrl} from '../constants/app-url';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private appUrl: AppUrl, private http: HttpClient) {}
  getUsers(): Observable<any> {
    return this.http.get(this.appUrl.USERS()).pipe();
  }
  addUser(data): Observable<any> {
    return this.http.post(this.appUrl.USERS(), data).pipe();
  }
  updateUser(data, userId): Observable<any>{
    return this.http.put(this.appUrl.USER_BY_ID(userId), data).pipe();

  }

}
