import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatTooltipModule} from "@angular/material/tooltip";
import { PresentationBlocComponent } from './components/presentation-bloc/presentation-bloc.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { WellnessComponent } from './pages/wellness/wellness.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationBlocComponent,
    WellnessComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTooltipModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
