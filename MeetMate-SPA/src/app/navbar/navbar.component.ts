import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  model: any = {};

  constructor(private service: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.service.login(this.model)
      .subscribe(next => console.log('Logged in!'), error => console.log('Cannot login!'));
  }

  onSubmit() {
    console.log(this.model);
  }

  // loggedIn() {

  //   localStorage.setItem(token);
  // }

  // loggedOut() {
  //   localStorage.removeItem(token);
  // }

}
