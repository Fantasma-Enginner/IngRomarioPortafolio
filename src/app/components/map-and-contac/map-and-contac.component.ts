import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-map-and-contac",
  templateUrl: "./map-and-contac.component.html",
  styleUrls: ["./map-and-contac.component.css"],
})
export class MapAndContacComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor() {}

  ngOnInit() {}
}
