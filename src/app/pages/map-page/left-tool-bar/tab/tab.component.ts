import { Component, Input, OnInit } from '@angular/core';
import { Data } from '../../data';
import { MapPageService } from '../../map-page.service';

const titles = new Map([
  ["id", "ID"],
  ["name", "Tên"],
  ["district", "Khu vực"],
  ["dienTich", "Diện tích"],
  ["loaiDat", "Loại đất"],
  ["mucDichSD", "Mục đích sử dụng"],
  ["thongTin", "Thông tin"],
])
 

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  toolBarStyle = "";
  @Input() title: String;
  isOpen: boolean;
  data: Data;
  mapData: {key: string; value: string}[];

  constructor(private mapPagevice: MapPageService) { }

  ngOnInit(): void {
    this.mapPagevice.currentData$.subscribe(data => {
      this.data = data;

      this.mapData = []; // reset data
      // save properties in array
      Object.entries(data).forEach(
        ([_key, value]) => {
          let key = titles.get(_key) || _key;
          this.mapData.push({key , value})
        }
      );
    });
  }

  openTab(evt: any, cityName: string) {
    const tabcontent = document.querySelectorAll('.tabcontent')
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("display");
      tabcontent[i].classList.add("display-none");
    }
  
    const tablinks = document.querySelectorAll('.tablinks')
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
  
    let e = document.querySelector(cityName);
    e && e.classList.add("display");
    evt.currentTarget.className += " active";
  }
}
