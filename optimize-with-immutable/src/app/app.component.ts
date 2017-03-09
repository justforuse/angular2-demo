import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public game;
  constructor(){

  }
  onInit(){
    this.startNewGame();
  }
  startNewGame(){
    this.game = createGame({cols: 16, rows: 16, mines: 48});
  }
}
