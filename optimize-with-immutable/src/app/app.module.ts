import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MinesweeperComponent } from './minesweeper/minesweeper.component';
import { RowComponent } from './row/row.component';
import { TileComponent } from './tile/tile.component';

@NgModule({
  declarations: [
    AppComponent,
    MinesweeperComponent,
    RowComponent,
    TileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
