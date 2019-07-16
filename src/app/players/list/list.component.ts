import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../player';
import { PlayersService } from '../services/players.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  players: Player[] = null;
  constructor(private router: Router, private playersService: PlayersService) { }

  ngOnInit(): void {
    this.getPlayers();
  }
  getPlayers(): void {
    this.players = this.playersService.getPlayers();
  }
  selectPlayer(player: Player): void {
    const link = ['/player', player.id];
    this.router.navigate(link);
  }

}
