import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.scss']
})
export class TictactoeComponent implements OnInit {
  constructor() { }


  title = "Tic Tac Toe";
  status = "No Result";
  board = [["", "", ""], ["", "", ""], ["", "", ""]];
  start = true;
  isCircle = this.start;
  startWith = this.isCircle ? "O" : "X";
  ngOnInit() {

  }

  onclick(x: number, y: number) {

    console.log(event);

    if (this.board[x][y] === "") {
      if (this.isCircle) {
        this.board[x][y] = "O";
        this.isCircle = false;
        this.checkWin("O");
      } else {
        this.board[x][y] = "X";
        this.isCircle = true;
        this.checkWin("X");
      }
    }

  }
  checkWin(arg) {
    if (this.board[0][0] == arg && this.board[1][1] == arg && this.board[2][2] == arg) {
      this.status = "Win " + arg;

    }
    if (this.board[0][2] == arg && this.board[1][1] == arg && this.board[2][0] == arg) {
      this.status = "Win " + arg;
    }
    if (this.board[0][0] == arg && this.board[1][0] == arg && this.board[2][0] == arg) {
      this.status = "Win " + arg;
    }
    if (this.board[0][1] == arg && this.board[1][1] == arg && this.board[2][1] == arg) {
      this.status = "Win " + arg;
    }
    if (this.board[0][2] == arg && this.board[1][2] == arg && this.board[2][2] == arg) {
      this.status = "Win " + arg;
    }
    if (this.board[0][0] == arg && this.board[0][1] == arg && this.board[0][2] == arg) {
      this.status = "Win " + arg;
    }
    if (this.board[1][0] == arg && this.board[1][1] == arg && this.board[1][2] == arg) {
      this.status = "Win " + arg;
    }
    if (this.board[2][0] == arg && this.board[2][1] == arg && this.board[2][2] == arg) {
      this.status = "Win " + arg;
    }
  }


  clear() {
    this.board = [["", "", ""], ["", "", ""], ["", "", ""]];
    this.startWith = this.isCircle ? "O" : "X";
  }

}
