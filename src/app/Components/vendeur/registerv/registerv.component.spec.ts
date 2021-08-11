import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistervComponent } from './registerv.component';

describe('RegistervComponent', () => {
  let component: RegistervComponent;
  let fixture: ComponentFixture<RegistervComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistervComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistervComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
