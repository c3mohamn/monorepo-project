import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DurotarComponent } from './durotar.component';

describe('DurotarComponent', () => {
  let component: DurotarComponent;
  let fixture: ComponentFixture<DurotarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DurotarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DurotarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
