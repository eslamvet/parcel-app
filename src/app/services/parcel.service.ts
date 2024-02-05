import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Parcel } from '@interfaces/parcel';
import { BehaviorSubject, EMPTY, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParcelService {
  private parcels$ = new BehaviorSubject<Parcel[]>([])
  readonly parcelsObs$ = this.parcels$.asObservable()
  constructor(private http:HttpClient) { }

  getAllParcels(){
    return this.http.get<{parcels:Parcel[]}>('/assets/parcels.json').pipe(map(({parcels})=>{
      this.parcels$.next(parcels)
      return parcels
    }),catchError(()=>{
      alert('something went wrong')
      return EMPTY
    }))
  }
}
