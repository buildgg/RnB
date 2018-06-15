import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routesBBD: Routes = [];

@NgModule({
    imports: [RouterModule.forChild(routesBBD)],
    exports: [RouterModule]
})
export class BBDRoutingModule {
}
