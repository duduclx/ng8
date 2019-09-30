import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterOneComponent} from './chapter-one/chapter-one.component';
import { ChapterTwoComponent} from './chapter-two/chapter-two.component';

@NgModule({
  declarations: [
    ChapterOneComponent,
    ChapterTwoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChapterOneComponent,
    ChapterTwoComponent
  ]
})
export class ChaptersModule { }
