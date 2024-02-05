import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParcelService } from '@services/parcel.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  parcelService = inject(ParcelService)
  ngOnInit(): void {
    this.parcelService.getAllParcels().subscribe()
  }
}
