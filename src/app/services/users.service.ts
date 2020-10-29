import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {map, tap, take, exhaustMap, catchError} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
    providedIn : 'root'
})
export class UserService {
    usersObservable = new Subject();
    users: any[];
    constructor(private http: HttpClient){}

    getUsersList(): any {
        return this.http.get(`${environment.baseUrl}/user`).pipe(
            catchError(async (error) => console.error(error)));
      }
      get userList(): any {
        return this.users.slice();
    }
}
