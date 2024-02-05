enum PARCELSTATUS{
  PICKED='picked',
  DELIVERED='delivered',
  TRANSIT='transit',
}


export interface Parcel {
  id:string,
  status:PARCELSTATUS,
  origin:{
    address:string,
    date:Date|null
  },
  transit:{
    address:string,
    date:Date|null
  },
  delivery:{
    address:string,
    date:Date|null
  }
}
