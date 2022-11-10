import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modulos de Material

import {MatButtonModule} from '@angular/material/button';
import { GabyComponent } from './gaby/gaby.component';

//Fin de Modulos de Material

@NgModule({
  declarations: [
    AppComponent,
    GabyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
