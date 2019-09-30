import { Component, OnInit } from '@angular/core';
import {ChapterFiveService} from '../chapter-five.service';

@Component({
  selector: 'app-chapter-five',
  templateUrl: './chapter-five.component.html',
  styleUrls: ['./chapter-five.component.scss']
})
export class ChapterFiveComponent implements OnInit {

  private message: string;

  constructor(private fiveService: ChapterFiveService) { }

  ngOnInit() {
    this.message = this.fiveService.getMessage();
  }

}
