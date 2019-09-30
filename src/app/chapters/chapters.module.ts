import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterOneComponent} from './chapter-one/chapter-one.component';
import { ChapterTwoComponent} from './chapter-two/chapter-two.component';
import { ChapterThreeComponent } from './chapter-three/chapter-three.component';

import { ChaptersRoutingModule } from './chapters-routing.module';

@NgModule({
  declarations: [
    ChapterOneComponent,
    ChapterTwoComponent,
    ChapterThreeComponent
  ],
  imports: [
    CommonModule,
    ChaptersRoutingModule
  ],
  exports: []
})
export class ChaptersModule { }
