import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrunIc2Component } from './urun-ic2.component';

describe('UrunIc2Component', () => {
  let component: UrunIc2Component;
  let fixture: ComponentFixture<UrunIc2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrunIc2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrunIc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
