import { Component, OnInit } from '@angular/core';

declare var google: any; // Add this line to declare the 'google' variable

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"],
})
export class NavBarComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  
  }
}