import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelSignalsContainerComponent } from './model-signals-container.component';

describe('ModelSignalsContainerComponent', () => {
  let component: ModelSignalsContainerComponent;
  let fixture: ComponentFixture<ModelSignalsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelSignalsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelSignalsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
