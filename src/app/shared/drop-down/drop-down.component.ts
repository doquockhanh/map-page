import { Component, ContentChildren, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, QueryList, ViewChild } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit{
  @ViewChild('myDropdown') dropdown: ElementRef;
  @Input() ddName: String;
  @Output() click = new EventEmitter;

  @ContentChildren(ButtonComponent)
  dropList: QueryList<ButtonComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.dropdown.nativeElement.classList.toggle("show");
  }

  @HostListener('window:mouseout', ['$event'])
  handleKeyDown(event: any) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.fa-angle-down') && !event.target.matches('.item')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  dropdownItemClick(item: ButtonComponent, e: any) {
    item.click.emit(e);
  }
}
