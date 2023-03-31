import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NbActionsModule, NbCardModule, NbPopoverModule, NbAlertModule, NbTabsetModule, NbLayoutModule } from '@nebular/theme';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    NbActionsModule,
    NbCardModule,
    NbPopoverModule,
    NbAlertModule,
    NbTabsetModule,
    NbLayoutModule,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
