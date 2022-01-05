import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSharemarketComponent } from './manage-sharemarket.component';

describe('ManageSharemarketComponent', () => {
  let component: ManageSharemarketComponent;
  let fixture: ComponentFixture<ManageSharemarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageSharemarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSharemarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
