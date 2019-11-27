import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseProfileComponent } from './license-profile.component';

describe('LicenseProfileComponent', () => {
  let component: LicenseProfileComponent;
  let fixture: ComponentFixture<LicenseProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenseProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
