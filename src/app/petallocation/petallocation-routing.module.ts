import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetAllocationAddComponent } from './pet-allocation-add/pet-allocation-add.component';
import { PetAllocationEditComponent } from './pet-allocation-edit/pet-allocation-edit.component';
import { PetAllocationListComponent } from './pet-allocation-list/pet-allocation-list.component';
import { PetAllocationDetailsComponent } from './pet-allocation-details/pet-allocation-details.component';

const routes: Routes = [
  {path : 'petallocations', component: PetAllocationListComponent},
  {path : 'petallocations/new', component: PetAllocationAddComponent},
  {path : 'petallocations/:id', component: PetAllocationDetailsComponent},
  {path : 'petallocations/:id/edit', component: PetAllocationEditComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetallocationRoutingModule { }
