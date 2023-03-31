import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapPageComponent } from './map-page.component';
import { MapModule } from 'src/app/shared/map/map.module';
import { LeftToolBarComponent } from './left-tool-bar/left-tool-bar.component';
import { MapAreaComponent } from './map-area/map-area.component';
import { ButtonModule } from 'src/app/shared/button/button.module';
import { DropDownModule } from 'src/app/shared/drop-down/drop-down.module';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { FullScreenComponent } from './full-screen/full-screen.component';
import { BottomTollBarComponent } from './bottom-toll-bar/bottom-toll-bar.component';
import { NbActionsModule, NbAlertModule, NbCardModule, NbPopoverModule, NbTabsetModule, NbTreeGridModule } from '@nebular/theme';
import { TabComponent } from './left-tool-bar/tab/tab.component';
import { LeftBottomToolBarComponent } from './left-tool-bar/left-bottom-tool-bar/left-bottom-tool-bar.component';

@NgModule({
  declarations: [MapPageComponent, LeftToolBarComponent, MapAreaComponent, ToolBarComponent, FullScreenComponent, BottomTollBarComponent, TabComponent, LeftBottomToolBarComponent],
  imports: [
    CommonModule,
    MapModule,
    ButtonModule,
    DropDownModule,
    HttpClientModule,
    NbActionsModule,
    NbCardModule,
    NbPopoverModule,
    NbAlertModule,
    NbTabsetModule,
    NbTreeGridModule,
  ],
  exports: [
    MapPageComponent
  ]
})
export class MapPageModule { }
