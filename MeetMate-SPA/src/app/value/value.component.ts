import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ValueService } from '../services/value.service';
import { Value } from '../models/value';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  title = 'Meet Mate';
  // values: any;
  data: any;
  users: Object[];
  values: any;

  constructor(
    // private valueService: ValueService)
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getValues();
    // this.getData();
    // this.getFiveRandomUsers();
    // this.valueService.getValues().subscribe(response => this.values = response);
  }

  getValues() {
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.values = response;
    }, error => console.log(error));
  }

  // getData() {
  //   this.http.get('http://localhost:5000/WeatherForecast').subscribe(response => this.data = response, err => console.log(err));
  // }

  // getFiveRandomUsers() {
  //   this.http.get('https://randomuser.me/api/?results=5').subscribe((response: any) => this.users = response.results)
  // }

}
