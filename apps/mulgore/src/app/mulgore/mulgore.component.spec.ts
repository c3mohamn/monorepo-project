import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MulgoreComponent } from './mulgore.component';

describe('MulgoreComponent', () => {
  let component: MulgoreComponent;
  let fixture: ComponentFixture<MulgoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MulgoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MulgoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
