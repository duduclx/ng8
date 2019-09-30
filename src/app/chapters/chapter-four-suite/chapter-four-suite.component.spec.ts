import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterFourSuiteComponent } from './chapter-four-suite.component';

describe('ChapterFourSuiteComponent', () => {
  let component: ChapterFourSuiteComponent;
  let fixture: ComponentFixture<ChapterFourSuiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterFourSuiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterFourSuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
