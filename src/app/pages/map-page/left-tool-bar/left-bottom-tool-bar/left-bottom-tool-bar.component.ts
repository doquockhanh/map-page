import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Data } from '../../data';
import { MapPageService } from '../../map-page.service';

@Component({
  selector: 'app-left-bottom-tool-bar',
  templateUrl: './left-bottom-tool-bar.component.html',
  styleUrls: ['./left-bottom-tool-bar.component.scss']
})
export class LeftBottomToolBarComponent implements OnInit {
  data: Data;
  @ViewChild('myTopnav') myNameElem: ElementRef;

  constructor(
    private mapPageService: MapPageService,
  ) { }

  ngOnInit(): void {
    this.mapPageService.currentData$.subscribe(data => {
      this.data = data;
    });
  }

  closeLeftBar(){
    this.mapPageService.opendLeftBar(false);
  }
}
