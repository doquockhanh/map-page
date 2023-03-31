import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BasemapToggle, DlGmap, DlGMapType, DlMap } from 'ditagis-leaflet';
import * as L from 'leaflet';
import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
  @ViewChild('mapView') mapView: ElementRef<HTMLDivElement>;
  public map: DlMap;

  constructor(private mapService: MapService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.map = this.mapService.create(this.mapView.nativeElement);

    new BasemapToggle({
      default: new DlGmap({ type: DlGMapType.satellite }),
      next: new DlGmap({ type: DlGMapType.standardroadmap }),
    }).addTo(this.map);
  }
}
