import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChapterFiveService {

  constructor() { }

  getMessage() {
    return 'message du service';
  }
}
