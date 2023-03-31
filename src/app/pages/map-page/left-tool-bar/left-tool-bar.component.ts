import { Component, OnInit } from '@angular/core';
import { MapPageService } from '../map-page.service';

@Component({
  selector: 'app-left-tool-bar',
  templateUrl: './left-tool-bar.component.html',
  styleUrls: ['./left-tool-bar.component.scss']
})
export class LeftToolBarComponent implements OnInit {
  isOpen: boolean;

  constructor(private mapPagevice: MapPageService) {}

  ngOnInit(): void {
    this.mapPagevice.currentleftBarStatus$.subscribe(open => {
      // close/open left tool bar
      this.isOpen = open;
    });
  }

  openToolBar(open: boolean){
    this.mapPagevice.opendLeftBar(open);
  }

}