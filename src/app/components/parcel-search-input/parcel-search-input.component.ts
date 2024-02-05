import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { BaseHrefService } from '@services/base-href.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-parcel-search-input',
  standalone: true,
  host:{
    "class":"w-1/2"
  },
  imports: [ReactiveFormsModule],
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './parcel-search-input.component.html',
  styleUrl: './parcel-search-input.component.scss'
})
export class ParcelSearchInputComponent {
  @Input() parcelNumberSubject!:Subject<string>
  @Input() loading!:boolean
  BASE_HREF = inject(BaseHrefService).BASE_HREF
  parcelNumperInput = new FormControl("",{nonNullable:true,validators:Validators.required})

}
