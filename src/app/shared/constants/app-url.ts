import {environment} from '../../../environments/environment';
import {Injectable} from '@angular/core';

@Injectable()
export class AppUrl {

  constructor() {
  }

  public get APP_URL_V1(): string {
    return environment.appUrl + 'v1/';
  }
  public USERS(): string {
    return this.APP_URL_V1 + 'users';
  }
  public USER_BY_ID(id, ): string {
    return this.APP_URL_V1 + 'users/' + id;
  }
}

