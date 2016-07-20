import { Component, OnInit } from '@angular/core';
import { BoardValue } from '../board-value.directive';
import { TictactoeService } from '../tictactoe.service';

@Component({
  moduleId: module.id,
  selector: 'board-tic-tac-toe',
  templateUrl: 'board.component.html',
  styleUrls: ['board.component.css'],
  directives: [BoardValue]
})
export class BoardComponent implements OnInit {

  square: Array<any>;
  battlefield: any;
  currentPlayer: any;
  currentPlayerLabel: string;
  firstPlayer: boolean;
  endGame: boolean;

  constructor(private service: TictactoeService) { }

  ngOnInit() {
    this.endGame = false;
    this.firstPlayer = true;
    this.currentPlayerLabel = this.getPlayerLabel();
    this.square = [null, null, null, null, null, null, null, null, null];
    this.battlefield = [
      // y: 0  y: 1  y: 2
      [null, null, null], // x: 0
      [null, null, null], // x: 1
      [null, null, null]  // x: 2
    ];
  }

  getPlayerLabel() {
    if (!this.endGame) {
      if (this.firstPlayer) {
        return '<img src="app/images/ic_X.svg" alt="X">';
      } else {
        return '<img src="app/images/ic_O.svg" alt="O">';
      }
    } else {
      return '';
    }
  }

  getValue() {
    if (this.firstPlayer) {
      return 'X';
    } else {
      return 'O';
    }
  }

  StartGame() {
    this.endGame = false;
    this.resetBattle();
  }

  resetBattle() {
    this.firstPlayer = true;
    this.endGame = false;
    let battleField: any = document.querySelectorAll('.square');
    for (let index: number = 0; index < battleField.length; index++) {
      battleField[index].innerHTML = null;
       this.battlefield[parseInt(index / 3 + '')][index % 3] = null;
    }
  }

  selectSquare(index) {

    if (!this.endGame) {    
      this.battlefield[parseInt(index / 3 + '')][index % 3] = this.getValue();
      var result = this.service.checkGame(this.battlefield);
      if (result) {
        alert(this.getValue() + ' won !!!!!');
        this.endGame = true;
      }

      this.firstPlayer = !this.firstPlayer;
      this.currentPlayerLabel = this.getPlayerLabel();
    }
  }
}
