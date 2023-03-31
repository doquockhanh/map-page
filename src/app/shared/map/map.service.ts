import { Injectable } from '@angular/core';
import { DlMap } from 'ditagis-leaflet';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  constructor() { }

  private _map: DlMap;
  public get map(): DlMap {
    return this._map;
  }

  create(ele:HTMLDivElement){
    this._map = new DlMap(ele).setView([10.155214, 106.453260],10);
    return this._map;
  }
}
