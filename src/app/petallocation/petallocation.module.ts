import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetallocationRoutingModule } from './petallocation-routing.module';
import { PetAllocationListComponent } from './pet-allocation-list/pet-allocation-list.component';
import { PetAllocationAddComponent } from './pet-allocation-add/pet-allocation-add.component';
import { PetAllocationEditComponent } from './pet-allocation-edit/pet-allocation-edit.component';
import { PetAllocationDetailsComponent } from './pet-allocation-details/pet-allocation-details.component';


@NgModule({
  declarations: [
    PetAllocationListComponent,
    PetAllocationAddComponent,
    PetAllocationEditComponent,
    PetAllocationDetailsComponent
  ],
  imports: [
    CommonModule,
    PetallocationRoutingModule
  ]
})
export class PetallocationModule { }
