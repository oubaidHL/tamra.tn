import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthVComponent } from './auth-v.component';

describe('AuthVComponent', () => {
  let component: AuthVComponent;
  let fixture: ComponentFixture<AuthVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
