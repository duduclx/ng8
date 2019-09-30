import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterFourEndChildComponent } from './chapter-four-end-child.component';

describe('ChapterFourEndChildComponent', () => {
  let component: ChapterFourEndChildComponent;
  let fixture: ComponentFixture<ChapterFourEndChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterFourEndChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterFourEndChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
