import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ChapterOneComponent} from './chapter-one/chapter-one.component';
import {ChapterTwoComponent} from './chapter-two/chapter-two.component';
import {ChapterThreeComponent} from './chapter-three/chapter-three.component';
import {ChapterThreeSuiteComponent} from './chapter-three-suite/chapter-three-suite.component';
import {ChapterFourComponent} from './chapter-four/chapter-four.component';


const routes: Routes = [
  {path: 'home', component: ChapterFourComponent},
  {path: 'composant', component: ChapterOneComponent},
  {path: 'module', component: ChapterTwoComponent},
  {path: 'router', component: ChapterThreeComponent},
  {path: 'routerLink', component: ChapterThreeSuiteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChaptersRoutingModule { }
