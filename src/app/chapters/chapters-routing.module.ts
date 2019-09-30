import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ChapterThreeComponent} from './chapter-three/chapter-three.component';

const routes: Routes = [
  {path: 'home', component: ChapterThreeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChaptersRoutingModule { }
