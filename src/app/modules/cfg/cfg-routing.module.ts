import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CfgComponent } from "./cfg.component";

const routes: Routes = [
  {
    path: "",
    component: CfgComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CfgRoutingModule {
  constructor() {
    console.log("CfgRoutingModule::constructor");
  }
}
