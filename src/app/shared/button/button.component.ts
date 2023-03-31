import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Output() click = new EventEmitter;
  @Input() text?: String;
  @Input() btnName?: String;
  @Input() btnType?: String;
  btnStyle: String[] = [];

  constructor() { }

  ngOnInit(): void {
    this.btnType && this.btnStyle.push(this.btnType);
  }
}
