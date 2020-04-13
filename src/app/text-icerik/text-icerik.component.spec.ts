import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextIcerikComponent } from './text-icerik.component';

describe('TextIcerikComponent', () => {
  let component: TextIcerikComponent;
  let fixture: ComponentFixture<TextIcerikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextIcerikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextIcerikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
