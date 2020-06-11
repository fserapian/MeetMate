import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() { }

  login() {
    this.authService.login(this.model).subscribe(
      next => {
        this.alertify.success("Logged in!");
      },
      error => {
        this.alertify.error(error.title);
      }
    );
  }

  loggedIn() {
    // const token = localStorage.getItem("token");
    // return !!token; // return true if there is something in token and false if it is empty

    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem("token");
    this.alertify.message('Logged out');
  }

}
