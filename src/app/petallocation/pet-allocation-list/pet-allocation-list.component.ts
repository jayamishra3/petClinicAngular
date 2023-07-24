import { Component, OnInit } from '@angular/core';
import { Pet } from 'app/pets/pet';
import { PetAllocation } from '../petallocation';
import { PetAllocationService } from '../pet-allocation.service';

@Component({
  selector: 'app-pet-allocation-list',
  templateUrl: './pet-allocation-list.component.html',
  styleUrls: ['./pet-allocation-list.component.css']
})
export class PetAllocationListComponent implements OnInit {
  
  petAllocations: PetAllocation[];
  errorMessage: string;

  constructor(private service: PetAllocationService) { }

  ngOnInit(): void {
    //fetch all petallocations
    this.service.getPetAllocations().subscribe(
      (data) => this.petAllocations = data,
      (error:any) => this.errorMessage = error);
      console.log(this.petAllocations);

  }

}
