import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInfoForMenuComponent } from './login-info-for-menu.component';

describe('LoginInfoForMenuComponent', () => {
  let component: LoginInfoForMenuComponent;
  let fixture: ComponentFixture<LoginInfoForMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginInfoForMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginInfoForMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
