import { Component, OnInit } from "@angular/core";
import { ListService } from "./list.service";
import { RouterModule, Router } from "@angular/router";

@Component({
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  aMembers = [];

  constructor(private listService: ListService, private router: Router) {}

  ngOnInit() {
    this.listService.getMembers().subscribe(response => {
      this.aMembers = response.a;
    });
  }

  viewMaintenanceBill(roomId) {
    this.router.navigate(["maintenance-bill", roomId]);
  }
}
