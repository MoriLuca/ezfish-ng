import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaghiComponent } from './laghi.component';

describe('LaghiComponent', () => {
  let component: LaghiComponent;
  let fixture: ComponentFixture<LaghiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaghiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaghiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
