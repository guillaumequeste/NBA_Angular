import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { Router, ActivatedRoute } from '@angular/router';
import { PlayersService } from '../services/players.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  player: Player = null;
  constructor(private route: ActivatedRoute, private router: Router, private playersService: PlayersService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.player = this.playersService.getPlayer(id);
  }
  goBack(): void {
    this.router.navigate(['/players']);
  }
}
