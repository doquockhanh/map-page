import { Component, OnInit } from '@angular/core';
import { MapPageService } from '../map-page.service';

@Component({
  selector: 'app-map-area',
  templateUrl: './map-area.component.html',
  styleUrls: ['./map-area.component.scss']
})
export class MapAreaComponent implements OnInit {
  mapStyle: String;
  constructor(private mapPageService: MapPageService) { }

  ngOnInit(): void {
    this.mapPageService.currentleftBarStatus$.subscribe(open => {
      if(open){
        this.mapStyle = "map";
      }else{
        this.mapStyle = "map-lg";
      }
    });
  }
}
