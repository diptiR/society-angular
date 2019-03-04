import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { MaintenanceBillComponent } from "./maintenanceBill/maintenanceBill.component";

@NgModule({
  imports: [RouterModule.forRoot([
    { path: "list", component: ListComponent },
    { path: "maintenance-bill/:roomNumber", component: MaintenanceBillComponent }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule {}
