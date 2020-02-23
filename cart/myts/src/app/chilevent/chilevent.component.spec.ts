import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChileventComponent } from './chilevent.component';

describe('ChileventComponent', () => {
  let component: ChileventComponent;
  let fixture: ComponentFixture<ChileventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChileventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChileventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
