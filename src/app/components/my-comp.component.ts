import { Component, OnInit, Input } from '@angular/core';
import { Card, UnoDeck, Player } from '../model/uno';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit {

  @Input() playerCards: Card[];
  playerNum: number;
  playerList: Player[] = [];
  deck: UnoDeck;

  constructor() { }

  ngOnInit() {
    this.playerNum = 2;
  }

  public AddPlayers(): void {
    if (this.playerNum < 7) {
      this.playerNum++;
    }
  }

  public RemovePlayers(): void {
    if (this.playerNum > 2) {
      this.playerNum--;
    }
  }

  public Start(): void {
    this.playerList=[];
    this.deck = new UnoDeck();

    for (let i = 0; i < this.playerNum; i++) {
      let cards=[];
      for (let j = 0; j < 7; j++){
        cards[j] = this.deck.take();
      }
      
      this.playerList.push({
        index: i + 1,
        cards: cards
      });
    }
  }
}

