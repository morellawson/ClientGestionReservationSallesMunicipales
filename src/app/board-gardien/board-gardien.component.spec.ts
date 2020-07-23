import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardGardienComponent } from './board-gardien.component';

describe('BoardGardienComponent', () => {
  let component: BoardGardienComponent;
  let fixture: ComponentFixture<BoardGardienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardGardienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardGardienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
