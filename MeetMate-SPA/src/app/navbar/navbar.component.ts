import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  model: any = {};

  constructor(private service: AuthService) { }

  ngOnInit() { }

  login() {
    this.service.login(this.model).subscribe(
      next => console.log("Logged in!"),
      error => console.log("Cannot login!")
    );
  }

  loggedIn() {
    const token = localStorage.getItem("Token");
    return !!token; // return true if there is something in Token and false if it is empty
  }

  logout() {
    localStorage.removeItem("Token");
    console.log('Logged out');
  }
}
