import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HandleError, HttpErrorHandler } from 'app/error.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PetAllocation } from './petallocation';

@Injectable({
  providedIn: 'root'
})
export class PetAllocationService {

  entityUrl = environment.REST_API_URL + 'pettreatments';
  private readonly handleError: HandleError;
  
  // Constructor injects httperrorhandler and httpclient

  constructor( private httpErrorHandler: HttpErrorHandler,
    private http: HttpClient) {
    this.handleError = httpErrorHandler.createHandleError('PetAllocationService');
   
  }
  
  // Fetch all petallocations using Observable
  
  getPetAllocations(): Observable<PetAllocation[]> {
    return this.http.get<PetAllocation[]>(this.entityUrl)
      .pipe(
        catchError(this.handleError('getPetAllocations',[]))
      );
  }

  // Fetch petallocation by id using Observable

  getPetAllocationById(petAllocationId: string): Observable<PetAllocation> {
    return this.http.get<PetAllocation>(this.entityUrl + '/' + petAllocationId)
      .pipe(
        catchError(this.handleError('getPetAllocationById',{} as PetAllocation))
      );
  }

  // Create petallocation using Observable

  createPetAllocation(petAllocation: PetAllocation): Observable<PetAllocation> {
    return this.http.post<PetAllocation>(this.entityUrl, petAllocation)
      .pipe(
        catchError(this.handleError('createPetAllocation',{} as PetAllocation))
      );
  }

  // Update petallocation using Observable

  updatePetAllocation(petAllocation: PetAllocation): Observable<PetAllocation> {
    return this.http.put<PetAllocation>(this.entityUrl + '/' + petAllocation.id, petAllocation)
      .pipe(
        catchError(this.handleError('updatePetAllocation',{} as PetAllocation))
      );
  }

  // Delete petallocation by id using Observable

  deletePetAllocationById(petAllocationId: string): Observable<number> {
    return this.http.delete<number>(this.entityUrl + '/' + petAllocationId)
      .pipe(
        catchError(this.handleError('deletePetAllocationById',{} as number))
      );
  }
}
