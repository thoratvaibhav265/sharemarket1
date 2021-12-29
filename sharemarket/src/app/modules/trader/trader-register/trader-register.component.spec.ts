import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraderRegisterComponent } from './trader-register.component';

describe('TraderRegisterComponent', () => {
  let component: TraderRegisterComponent;
  let fixture: ComponentFixture<TraderRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraderRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraderRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
