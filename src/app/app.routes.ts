import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'',pathMatch:'full',loadComponent:()=>import('./screens/parcel/parcel.component').then(c=>c.ParcelComponent)}
];
