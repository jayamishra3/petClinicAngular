import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetAllocationAddComponent } from './pet-allocation-add.component';

describe('PetAllocationAddComponent', () => {
  let component: PetAllocationAddComponent;
  let fixture: ComponentFixture<PetAllocationAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetAllocationAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetAllocationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
