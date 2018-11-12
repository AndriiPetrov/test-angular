import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user: User;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('user.json').subscribe((data: User) => this.user = data);
  }
}
