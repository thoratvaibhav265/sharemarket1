import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraderLoginComponent } from './trader-login.component';

describe('TraderLoginComponent', () => {
  let component: TraderLoginComponent;
  let fixture: ComponentFixture<TraderLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraderLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraderLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
