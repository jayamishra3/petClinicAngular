import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetAllocationDetailsComponent } from './pet-allocation-details.component';

describe('PetAllocationDetailsComponent', () => {
  let component: PetAllocationDetailsComponent;
  let fixture: ComponentFixture<PetAllocationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetAllocationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetAllocationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
