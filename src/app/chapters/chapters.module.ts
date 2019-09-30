import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaptersRoutingModule } from './chapters-routing.module';

import { ChapterOneComponent} from './chapter-one/chapter-one.component';
import { ChapterTwoComponent} from './chapter-two/chapter-two.component';
import { ChapterThreeComponent } from './chapter-three/chapter-three.component';
import { ChapterThreeSuiteComponent } from './chapter-three-suite/chapter-three-suite.component';
import { ChapterFourComponent } from './chapter-four/chapter-four.component';
import { ChapterFourSuiteComponent } from './chapter-four-suite/chapter-four-suite.component';
import { ChapterFourSuiteChildComponent} from './chapter-four-suite-child/chapter-four-suite-child.component';
import { ChapterFourEndComponent } from './chapter-four-end/chapter-four-end.component';
import { ChapterFourEndChildComponent } from './chapter-four-end-child/chapter-four-end-child.component';

@NgModule({
  declarations: [
    ChapterOneComponent,
    ChapterTwoComponent,
    ChapterThreeComponent,
    ChapterThreeSuiteComponent,
    ChapterFourComponent,
    ChapterFourSuiteComponent,
    ChapterFourSuiteChildComponent,
    ChapterFourEndComponent,
    ChapterFourEndChildComponent
  ],
  imports: [
    CommonModule,
    ChaptersRoutingModule
  ],
  exports: []
})
export class ChaptersModule { }
