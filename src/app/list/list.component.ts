import { Component, OnInit } from "@angular/core";
import { ListService } from "./list.service";

@Component({
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  aMembers = [];

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.listService.getMembers().subscribe(response => {
      this.aMembers = response.a;
    });
  }
}
