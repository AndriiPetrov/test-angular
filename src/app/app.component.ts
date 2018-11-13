// import { Component, OnInit} from '@angular/core';
// import { HttpService } from './http.service';
// import { User } from './user';

import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // providers: [HttpService]
})
export class AppComponent {

  // fact: number;

  phones = ['iPhone 7', 'LG G 5', 'Honor 9', 'Idol S4', 'Nexus 6P'];

  phone: Observable<string>;
  constructor() { this.showPhones(); }

  showPhones() {
    this.phone = interval(500).pipe(map((i: number) =>  this.phones[i]));
  }
  // x = 5;
  // money = 23.45;
  // message = 'Hello World!';
  // percentage = 0.14;
  // myDate = Date.now();

  // pi = 3.1415;
  // users: User[] = [];
  // error: any;

  // constructor(private httpService: HttpService) {}

  // ngOnInit() {
  //   this.httpService.getUsers().subscribe(
  //     data => this.users = data,
  //     error => {this.error = error.message, console.log(error); }
  //     );
  // }
}
