import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetAllocationListComponent } from './pet-allocation-list.component';

describe('PetAllocationListComponent', () => {
  let component: PetAllocationListComponent;
  let fixture: ComponentFixture<PetAllocationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetAllocationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetAllocationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
