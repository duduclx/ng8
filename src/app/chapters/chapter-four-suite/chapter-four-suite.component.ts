import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-chapter-four-suite',
  templateUrl: './chapter-four-suite.component.html',
  styleUrls: ['./chapter-four-suite.component.scss']
})
export class ChapterFourSuiteComponent implements OnInit {
  adresse: string;
  code: number;

  constructor() { }

  ngOnInit() {
    this.adresse = 'proche grenoble';
    this.code = 38170;
  }
  onClick() {
    if (this.adresse === 'proche grenoble') {
      this.adresse = 'seyssinet';
    } else if (this.adresse === 'seyssinet') {
      this.adresse = 'proche grenoble';
    }

  }

}
