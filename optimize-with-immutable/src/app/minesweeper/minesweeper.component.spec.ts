import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinesweeperComponent } from './minesweeper.component';

describe('MinesweeperComponent', () => {
  let component: MinesweeperComponent;
  let fixture: ComponentFixture<MinesweeperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinesweeperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinesweeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
