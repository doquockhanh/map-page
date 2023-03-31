import { Component, OnInit } from '@angular/core';
import { MapPageService } from '../map-page.service';

@Component({
  selector: 'app-bottom-toll-bar',
  templateUrl: './bottom-toll-bar.component.html',
  styleUrls: ['./bottom-toll-bar.component.scss']
})
export class BottomTollBarComponent implements OnInit {

  constructor(private mapPageService: MapPageService) { }

  ngOnInit(): void {
  }

  toggleLeftBar() {
    let status;
    this.mapPageService.currentleftBarStatus$.subscribe(s => {
      status = s
    });
    this.mapPageService.opendLeftBar(!status);
  }

  comingSoon() {
    alert("comming soon!");
  }
}
