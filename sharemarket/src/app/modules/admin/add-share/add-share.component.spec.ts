import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShareComponent } from './add-share.component';

describe('AddShareComponent', () => {
  let component: AddShareComponent;
  let fixture: ComponentFixture<AddShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddShareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
