import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';
import {environment} from "../../environments/environment";
//import * as sha1 from "sha1";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  header: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'ZFG-User-Auth-Token':''
  });

  constructor(private httpClient: HttpClient) {
  }

  login(username: string, password: string) {
    let data = {
      user: {
        username,
        password
      }
    };

    return this.httpClient.post(environment.urlDB + '/login', data, {headers: this.header})
      .pipe(map(data => data));
  }

  setUser(user) {
    let user_string = JSON.stringify(user);
    sessionStorage.setItem('adlUser', user_string);
  }

  setName(name) {
    let name_string = JSON.stringify(name);
    sessionStorage.setItem('adlName', name_string);
  }

  setToken(token) {
    sessionStorage.setItem('adlToken', token);
  }

  getToken() {
    return sessionStorage.getItem('adlToken');
  }


  getName() {
    let name =  sessionStorage.getItem('adlName');
    if (isNotNullOrUndefined(name)) {
      return JSON.parse(name);
    } else {
      return false;
    }
  }

  getUser() {
    let userName = sessionStorage.getItem('adlUser' );
    if (isNotNullOrUndefined(userName)) {
      return JSON.parse(userName);
    } else {
      return false;
    }
  }

  logOutUser() {
    let accesToken = sessionStorage.getItem('adlToken');
    sessionStorage.removeItem('adlToken');
    sessionStorage.removeItem('adlUser');
    sessionStorage.removeItem('adlName');
    return this.httpClient.post(environment.urlDB + '/logout', {accessToken: accesToken}, {headers: this.header});
  }

  isLogin(){
    return (this.getUser() !== false && this.getToken() !== null);
  }
}
