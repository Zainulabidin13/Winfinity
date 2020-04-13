import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YeniSayfa2Component } from './yeni-sayfa2.component';

describe('YeniSayfa2Component', () => {
  let component: YeniSayfa2Component;
  let fixture: ComponentFixture<YeniSayfa2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YeniSayfa2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YeniSayfa2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
