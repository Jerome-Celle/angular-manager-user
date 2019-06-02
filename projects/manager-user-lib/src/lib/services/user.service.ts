import {Inject, Injectable} from '@angular/core';
import {ApiRestGenericLibService} from 'api-rest-generic-lib';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class UserService extends ApiRestGenericLibService<User> {

  constructor(public http: HttpClient,
              @Inject('url_user') urlUser: string) {
    super(http);
    this.url = urlUser;

  }

  create(user: User, password: string): Observable<User> {

    user.password = password;
    return this.post(user);
  }

}
