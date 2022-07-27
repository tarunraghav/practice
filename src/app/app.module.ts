import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    AgGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
