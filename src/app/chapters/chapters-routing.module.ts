import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ChapterOneComponent} from './chapter-one/chapter-one.component';
import {ChapterTwoComponent} from './chapter-two/chapter-two.component';
import {ChapterThreeComponent} from './chapter-three/chapter-three.component';
import {ChapterThreeSuiteComponent} from './chapter-three-suite/chapter-three-suite.component';
import {ChapterFourComponent} from './chapter-four/chapter-four.component';
import {ChapterFourSuiteComponent} from './chapter-four-suite/chapter-four-suite.component';
import {ChapterFourEndComponent} from './chapter-four-end/chapter-four-end.component';


const routes: Routes = [
  {path: 'home', component: ChapterFourEndComponent},
  {path: 'composant', component: ChapterOneComponent},
  {path: 'module', component: ChapterTwoComponent},
  {path: 'router', component: ChapterThreeComponent},
  {path: 'routerLink', component: ChapterThreeSuiteComponent},
  {path: 'data-binding', component: ChapterFourComponent},
  {path: 'parent-to-child', component: ChapterFourSuiteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChaptersRoutingModule { }
