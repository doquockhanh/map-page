import { AfterViewInit, Component, OnInit } from '@angular/core';
import '@runette/leaflet-fullscreen';
import * as L from 'leaflet';
import { DlMap } from 'ditagis-leaflet';
import { MapPageService } from '../map-page.service';
import { MapService } from 'src/app/shared/map/map.service';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styleUrls: ['./full-screen.component.scss']
})
export class FullScreenComponent implements OnInit {
  constructor( 
    private mapService: MapService,
  ){ }

  ngOnInit(): void {
    L.control.fullscreen({
      position: undefined
    }).addTo(this.mapService.map);
  }

  fullScreen() {
    this.mapService.map.toggleFullscreen()
  }

}
