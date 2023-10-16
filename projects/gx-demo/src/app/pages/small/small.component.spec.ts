import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallComponent } from './small.component';

describe('SmallComponent', () => {
  let component: SmallComponent;
  let fixture: ComponentFixture<SmallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmallComponent]
    });
    fixture = TestBed.createComponent(SmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
