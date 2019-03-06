import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { MaintenanceBillComponent } from "./maintenanceBill.component";
import { AppRoutingModule } from "../app.routing.module";

@NgModule({
  declarations: [MaintenanceBillComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, AppRoutingModule]
})
export class MaintenanceBillModule { }