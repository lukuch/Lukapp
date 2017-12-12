import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../app.module";

import { FinancesRoutes } from "./finances.routing";

import { LilabilitiesComponent } from "./lilabilities/lilabilities.component";
import { AssetsComponent } from "./assets/assets.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FinancesRoutes),
    FormsModule,
    MaterialModule
  ],
  declarations: [LilabilitiesComponent, AssetsComponent]
})
export class FinancesModule {}
