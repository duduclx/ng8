import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterFourEndComponent } from './chapter-four-end.component';

describe('ChapterFourEndComponent', () => {
  let component: ChapterFourEndComponent;
  let fixture: ComponentFixture<ChapterFourEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterFourEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterFourEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
