import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Data } from './data';

const apiUrl = "https://622eee345c86fd315eb8561f.mockapi.io/api/v1/data"

@Injectable({
  providedIn: 'root'
})
export class MapPageService {
  private _leftBarOpen = new BehaviorSubject(false);
  currentleftBarStatus$ = this._leftBarOpen.asObservable();
  private _data = new BehaviorSubject(new Data);
  currentData$ = this._data.asObservable();

  opendLeftBar(isOpen: boolean) {
    this._leftBarOpen.next(isOpen);
  }

  setData(data: Data){
    this._data.next(data);
  }

  constructor(private httpClient: HttpClient) { }

  getData():Observable<Data[]>{
    return this.httpClient.get<Data[]>(apiUrl);
  }

  getById(id: number):Observable<Data[]>{
    return this.httpClient.get<Data[]>(apiUrl + id);
  }
}
