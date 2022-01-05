import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopWatchListComponent } from './top-watch-list.component';

describe('TopWatchListComponent', () => {
  let component: TopWatchListComponent;
  let fixture: ComponentFixture<TopWatchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopWatchListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopWatchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
