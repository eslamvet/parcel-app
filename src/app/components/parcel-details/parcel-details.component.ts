import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgZone, inject } from '@angular/core';
import { LoaderComponent } from '@components/loader/loader.component';
import { Parcel } from '@interfaces/parcel';

@Component({
  selector: 'app-parcel-details',
  standalone: true,
  imports: [LoaderComponent,DatePipe],
  host:{
    'class':'w-full'
  },
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './parcel-details.component.html',
  styleUrl: './parcel-details.component.scss'
})
export class ParcelDetailsComponent {
  @Input() loading!:boolean
  @Input() parcel!:Partial<Parcel>|undefined
  ngZone = inject(NgZone)
  steps = Array(3)

  printParcelHandler(){
    this.ngZone.runOutsideAngular(()=>window.print())
  }
}
