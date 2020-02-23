export class StoreData {
  stname:string
  gst:number
  licenceno:string
  static storeid=0
  constructor(stname,gst,licenceno){
    StoreData.storeid+1
    this.stname=stname
    this.gst=gst
    this.licenceno=licenceno

  }
}
