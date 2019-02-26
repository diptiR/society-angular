import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ListComponent } from "./list/list.component";

@NgModule({
  imports: [RouterModule.forRoot([{ path: "list", component: ListComponent }])],
  exports: [RouterModule]
})
export class AppRoutingModule {}
