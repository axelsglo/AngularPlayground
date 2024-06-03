import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjectionContainerComponent } from './content-projection-container.component';

describe('ContentProjectionContainerComponent', () => {
  let component: ContentProjectionContainerComponent;
  let fixture: ComponentFixture<ContentProjectionContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentProjectionContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentProjectionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
