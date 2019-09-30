import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-chapter-four-end-child',
  templateUrl: './chapter-four-end-child.component.html',
  styleUrls: ['./chapter-four-end-child.component.scss']
})
export class ChapterFourEndChildComponent implements OnInit {

  childProperty: string;
  @Output() childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.childProperty = 'je suis l\'enfant !';
    this.childEvent.emit(this.childProperty);
  }

}
