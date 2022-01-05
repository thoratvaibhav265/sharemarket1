import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellShareComponent } from './sell-share.component';

describe('SellShareComponent', () => {
  let component: SellShareComponent;
  let fixture: ComponentFixture<SellShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellShareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
