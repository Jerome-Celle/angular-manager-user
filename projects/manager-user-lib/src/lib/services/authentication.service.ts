import {EventEmitter, Inject, Injectable, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {ApiRestGenericLibService} from 'api-rest-generic-lib';

interface AuthenticationResponse {
  token: string;
}

@Injectable()
export class AuthenticationService extends ApiRestGenericLibService<null> {

  @Output() profile: EventEmitter<any> = new EventEmitter();

  private LOCAL_TOKEN = 'token';
  private LOCAL_USER_PROFILE = 'userProfile';

  constructor(public http: HttpClient,
              @Inject('url_authentication') private urlAuthentication: string,
              @Inject('url_reset_password') private urlResetPassword: string,
              @Inject('url_change_password') private urlChangePassword: string,
              @Inject('url_activate_user') private urlActivateUser: string) {
    super(http);
  }

  authenticate(login: string, password: string): Observable<AuthenticationResponse> {
    const headers = this.getHeaders();
    return this.http.post<AuthenticationResponse>(
      this.urlAuthentication,
      {
        login,
        password
      },
      {headers}
    );
  }

  logout(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.delete<any>(
      this.urlAuthentication + '/' + localStorage.getItem(this.LOCAL_TOKEN),
      {headers}
    );
  }

  resetPassword(email: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post<any>(
      this.urlResetPassword,
      {
        email
      },
      {headers}
    );
  }

  changePassword(token: string, newPassword: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post<any>(
      this.urlChangePassword,
      {
        token,
        new_password: newPassword
      },
      {headers}
    );
  }

  activate(token: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post<any>(
      this.urlActivateUser,
      {
        activation_token: token
      },
      {headers}
    );
  }

  isAuthenticated() {
    const token = localStorage.getItem(this.LOCAL_TOKEN);

    return !!token;
  }

  getProfile() {
    return new User(JSON.parse(localStorage.getItem(this.LOCAL_USER_PROFILE)));
  }

  setProfile(profile) {
    localStorage.setItem(this.LOCAL_USER_PROFILE, JSON.stringify(profile));
    this.profile.emit(profile);
  }

  setToken(token) {
    localStorage.setItem(this.LOCAL_TOKEN, token);
  }

  getToken() {
    return JSON.parse(localStorage.getItem(this.LOCAL_TOKEN));
  }

  removeToken() {
    localStorage.removeItem(this.LOCAL_TOKEN);
  }
}
