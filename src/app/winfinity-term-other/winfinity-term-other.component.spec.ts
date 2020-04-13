import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinfinityTermOtherComponent } from './winfinity-term-other.component';

describe('WinfinityTermOtherComponent', () => {
  let component: WinfinityTermOtherComponent;
  let fixture: ComponentFixture<WinfinityTermOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinfinityTermOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinfinityTermOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
