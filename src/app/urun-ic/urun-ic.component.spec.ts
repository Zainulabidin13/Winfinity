import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrunIcComponent } from './urun-ic.component';

describe('UrunIcComponent', () => {
  let component: UrunIcComponent;
  let fixture: ComponentFixture<UrunIcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrunIcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrunIcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
