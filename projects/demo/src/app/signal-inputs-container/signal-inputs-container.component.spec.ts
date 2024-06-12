import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalInputsContainerComponent } from './signal-inputs-container.component';

describe('SignalInputsContainerComponent', () => {
  let component: SignalInputsContainerComponent;
  let fixture: ComponentFixture<SignalInputsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalInputsContainerComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SignalInputsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
