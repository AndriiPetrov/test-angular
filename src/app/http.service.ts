import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) { }

    // getData() {
    //     return this.http.get('./assets/users.json');
    // }

    getUsers(): Observable<User[]> {
        return this.http.get('https://reqres.in/api/users?page=2').pipe(map(data => {
            const usersList = data['data'];
            return usersList.map(function(user: any) {
                return {
                    id: user.id,
                    firstName: user.first_name,
                    lastName: user.last_name,
                    avatar: user.avatar
                };
            });
        }),
        catchError(err => {
            console.log(err);
            return throwError(err);
        }));
    }
}
