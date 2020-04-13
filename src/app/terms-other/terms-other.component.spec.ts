import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsOtherComponent } from './terms-other.component';

describe('TermsOtherComponent', () => {
  let component: TermsOtherComponent;
  let fixture: ComponentFixture<TermsOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
