import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from "./app.component";
import { ListComponent } from "./list/list.component";
import { AppRoutingModule } from "./app.routing.module";
import { MaintenanceBillModule } from "./maintenanceBill/maintenanceBill.module";

@NgModule({
  declarations: [AppComponent, ListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaintenanceBillModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
