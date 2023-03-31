import { Component, OnInit } from '@angular/core';
import { MapPageService } from './map-page.service';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss']
})
export class MapPageComponent implements OnInit {
  leftToolBarStyle: String;
  mapStyle: String;

  constructor(private mapPageService: MapPageService) { }

  ngOnInit(): void {
    this.mapPageService.currentleftBarStatus$.subscribe(open => {

      // change style
      if(open){
        this.leftToolBarStyle = "left-tool-bar";
        this.mapStyle = "map-area";
      }else{
        this.leftToolBarStyle = "";
        this.mapStyle = "map-area-lg";
      }
    });
  }

}
