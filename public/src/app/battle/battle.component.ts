import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  player1 = {
    isUser: null,
    username: '',
    imgURL: '',
    user: null
  }

  player2 = {
    isUser: null,
    username: '',
    imgURL: '',
    user: null
  }

  constructor(private _usersService: UsersService, private _router: Router) { }

  findUser(username, playerNum) {
    this._usersService.findUser(username, (user) => {
      if (playerNum == 1) {
          this.player1.isUser = true;
          this.player1.imgURL = user.avatar_url;
          this.player1.user = user;
      } else {
          this.player2.isUser = true;
          this.player2.imgURL = user.avatar_url;
          this.player2.user = user;
      }
    }, () => {
      if (playerNum == 1) {
        this.player1.isUser = false;
      } else {
        this.player2.isUser = false;
      }
    });
  }

  battle() {
    this._usersService.battle(this.player1, this.player2, () => {
      this._router.navigateByUrl('/results');
    })
  }

  ngOnInit() {
  }

}
