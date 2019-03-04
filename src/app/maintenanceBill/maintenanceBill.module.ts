import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { MaintenanceBillComponent } from "./maintenanceBill.component";
import { AppRoutingModule } from "../app.routing.module";

@NgModule({
  declarations: [MaintenanceBillComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule]
})
export class MaintenanceBillModule {}