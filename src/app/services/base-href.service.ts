import { LocationStrategy } from '@angular/common';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseHrefService {
  private locationStrategy = inject(LocationStrategy)

  get BASE_HREF(){
    return this.locationStrategy.getBaseHref()
  }


}
