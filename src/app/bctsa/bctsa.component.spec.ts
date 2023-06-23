import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BCTSAComponent } from './bctsa.component';

describe('BCTSAComponent', () => {
  let component: BCTSAComponent;
  let fixture: ComponentFixture<BCTSAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BCTSAComponent]
    });
    fixture = TestBed.createComponent(BCTSAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
