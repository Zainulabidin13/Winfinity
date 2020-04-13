import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OturumEndComponent } from './oturum-end.component';

describe('OturumEndComponent', () => {
  let component: OturumEndComponent;
  let fixture: ComponentFixture<OturumEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OturumEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OturumEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
