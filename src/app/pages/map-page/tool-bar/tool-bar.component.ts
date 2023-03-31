import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { MapPageService } from '../map-page.service';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {
  data: Data[] = [];

  constructor(private mapPageService: MapPageService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.mapPageService.getData().subscribe(
      next => this.data = next,
      () => alert("Cannot get data")
    );
  }

  itemClick(open: boolean, item: Data){
    this.mapPageService.setData(item);
    open && this.mapPageService.opendLeftBar(open);
  }

  comingSoon() {
    alert("Comming soon!");
  }
}
