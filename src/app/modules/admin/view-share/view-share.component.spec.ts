import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewShareComponent } from './view-share.component';

describe('ViewShareComponent', () => {
  let component: ViewShareComponent;
  let fixture: ComponentFixture<ViewShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewShareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
