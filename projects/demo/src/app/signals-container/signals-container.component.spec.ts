import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsContainerComponent } from './signals-container.component';

describe('SignalsContainerComponent', () => {
  let component: SignalsContainerComponent;
  let fixture: ComponentFixture<SignalsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
