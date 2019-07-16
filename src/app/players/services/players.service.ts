import { Injectable } from '@angular/core';
import { Player } from '../player';
import { PLAYERS } from '../mock-players';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  getPlayers(): Player[] {
    return PLAYERS;
  }
  getPlayer(id: number): Player {
    const players = this.getPlayers();
    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < players.length; index++) {
      if (id === players[index].id) {
        return players[index];
      }
    }
  }
}
