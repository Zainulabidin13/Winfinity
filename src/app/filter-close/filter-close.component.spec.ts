import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCloseComponent } from './filter-close.component';

describe('FilterCloseComponent', () => {
  let component: FilterCloseComponent;
  let fixture: ComponentFixture<FilterCloseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterCloseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
