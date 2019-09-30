import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter-four',
  templateUrl: './chapter-four.component.html',
  styleUrls: ['./chapter-four.component.scss']
})
export class ChapterFourComponent implements OnInit {

  private prenom: string;
  private nom: string;

  constructor() { }

  ngOnInit() {
    this.prenom = 'julien';
    this.nom = 'dutilleul';
  }

  onClick() {
    if (this.prenom === 'toto') {
      this.prenom = 'julien';
    } else if (this.prenom === 'julien') {
      this.prenom = 'toto';
    }

  }

}
