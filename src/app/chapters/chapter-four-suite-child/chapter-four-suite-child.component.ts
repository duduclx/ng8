import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chapter-four-suite-child',
  templateUrl: './chapter-four-suite-child.component.html',
  styleUrls: ['./chapter-four-suite-child.component.scss']
})
export class ChapterFourSuiteChildComponent implements OnInit {
  @Input() adresse: string;
  @Input('code') parentCode: number;
  constructor() { }

  ngOnInit() {
  }

}
