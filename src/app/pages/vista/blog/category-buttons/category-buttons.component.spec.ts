import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryButtonsComponent } from './category-buttons.component';

describe('CategoryButtonsComponent', () => {
  let component: CategoryButtonsComponent;
  let fixture: ComponentFixture<CategoryButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
