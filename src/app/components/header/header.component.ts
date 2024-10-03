import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  // Method printPDF
  public printPDF() {
    const link = '../../../assets/doc/My corriculum cv Romario Gonzalez Web.pdf';
    const newWindows = window.open(link, "_block");
    if (newWindows) {
      newWindows.focus();
      newWindows.onload = () => {
        newWindows.print();
      }
    }

  }
}
