import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter-four-end',
  templateUrl: './chapter-four-end.component.html',
  styleUrls: ['./chapter-four-end.component.scss']
})
export class ChapterFourEndComponent implements OnInit {

  fromChild: string;
  constructor() { }

  ngOnInit(): void {
  }

  receiveChild($event) {
    this.fromChild = $event;
  }
}
