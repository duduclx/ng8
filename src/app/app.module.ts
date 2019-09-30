import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {PageStructureModule} from './page-structure/page-structure.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageStructureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
