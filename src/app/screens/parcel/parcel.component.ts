import { ParcelService } from '@services/parcel.service';
import { Component, inject } from '@angular/core';
import { ParcelSearchInputComponent } from '@components/parcel-search-input/parcel-search-input.component';
import { Subject, delay, map, shareReplay, switchMap, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ParcelDetailsComponent } from '@components/parcel-details/parcel-details.component';

@Component({
  selector: 'app-parcel',
  standalone: true,
  imports: [ParcelSearchInputComponent,AsyncPipe,ParcelDetailsComponent],
  templateUrl: './parcel.component.html',
  styleUrl: './parcel.component.scss'
})
export class ParcelComponent {
  loading=false
  parcelNumber$=new Subject<string>()
  parcelService = inject(ParcelService)
  parcel$ = this.parcelNumber$.asObservable().pipe(tap(()=>this.loading=true),delay(2000),switchMap((parcelNum)=>this.parcelService.parcelsObs$.pipe(map(parcels=>parcels.find(p=>p.id == parcelNum) ?? {}),tap(()=>this.loading=false)))).pipe(shareReplay(1))

}
