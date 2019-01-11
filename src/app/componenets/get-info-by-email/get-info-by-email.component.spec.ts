import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInfoByEmailComponent } from './get-info-by-email.component';

describe('GetInfoByEmailComponent', () => {
  let component: GetInfoByEmailComponent;
  let fixture: ComponentFixture<GetInfoByEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetInfoByEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetInfoByEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
