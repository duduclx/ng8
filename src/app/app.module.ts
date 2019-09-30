import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageStructureModule} from './page-structure/page-structure.module';
import { ChaptersModule } from './chapters/chapters.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageStructureModule,
    ChaptersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
