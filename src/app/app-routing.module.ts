import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {WellnessComponent} from "./pages/wellness/wellness.component";
import {PresentationBlocComponent} from "./components/presentation-bloc/presentation-bloc.component";

const routes: Routes = [
  { path: 'wellness', component: WellnessComponent },
  { path: '**', component: PresentationBlocComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
