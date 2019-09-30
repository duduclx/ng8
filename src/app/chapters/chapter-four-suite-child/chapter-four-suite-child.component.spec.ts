import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterFourSuiteChildComponent } from './chapter-four-suite-child.component';

describe('ChapterFourSuiteChildComponent', () => {
  let component: ChapterFourSuiteChildComponent;
  let fixture: ComponentFixture<ChapterFourSuiteChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterFourSuiteChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterFourSuiteChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
