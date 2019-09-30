import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterThreeSuiteComponent } from './chapter-three-suite.component';

describe('ChapterThreeSuiteComponent', () => {
  let component: ChapterThreeSuiteComponent;
  let fixture: ComponentFixture<ChapterThreeSuiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterThreeSuiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterThreeSuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
