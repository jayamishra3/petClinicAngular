import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetAllocationEditComponent } from './pet-allocation-edit.component';

describe('PetAllocationEditComponent', () => {
  let component: PetAllocationEditComponent;
  let fixture: ComponentFixture<PetAllocationEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetAllocationEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetAllocationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
