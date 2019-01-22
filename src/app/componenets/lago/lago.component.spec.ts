import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LagoComponent } from './lago.component';

describe('LagoComponent', () => {
  let component: LagoComponent;
  let fixture: ComponentFixture<LagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
