import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Parcel } from '@interfaces/parcel';
import { BehaviorSubject, EMPTY, catchError, map } from 'rxjs';
import { BaseHrefService } from './base-href.service';

@Injectable({
  providedIn: 'root'
})
export class ParcelService {
  BASE_HREF = inject(BaseHrefService).BASE_HREF
  http = inject(HttpClient)
  private parcels$ = new BehaviorSubject<Parcel[]>([])
  readonly parcelsObs$ = this.parcels$.asObservable()

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
