import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoGridContainerComponent } from './kendo-grid-container.component';

describe('KendoGridContainerComponent', () => {
  let component: KendoGridContainerComponent;
  let fixture: ComponentFixture<KendoGridContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KendoGridContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KendoGridContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
