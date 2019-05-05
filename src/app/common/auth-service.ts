import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';
import { sha256, sha224 } from 'js-sha256';

/** Mock client-side authentication/authorization service */
@Injectable({
    providedIn: 'root'
  })
export class AuthService {
  message:string;
  constructor(private datePipe: DatePipe) {
  }

  getAuthorizationToken() {
    console.log(this.getToken());
    return this.getToken();
  }
  getToken() {
    this.message = environment.applicationName + environment.tokenKey;
    this.message += this.datePipe.transform(new Date(), 'yyyyMMddhh');
    return sha256(this.message);
  }


}
