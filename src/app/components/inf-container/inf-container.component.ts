import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-inf-container",
  templateUrl: "./inf-container.component.html",
  styleUrls: ["./inf-container.component.css"],
})
export class InfContainerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  // Method downlader document
  public downloadPDF() {
    const link = document.createElement("a");
    link.href = "../../../assets/doc/My corriculum cv Romario Gonzalez Web.pdf";
    link.download = "Ing Romario Curriculum CV";
    link.click();
  }
}
