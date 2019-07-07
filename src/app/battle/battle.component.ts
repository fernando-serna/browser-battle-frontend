import { Component, OnInit } from '@angular/core';

import { BattleService } from '../battle.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  public battleSummary: any[] = [];

  constructor(private battleService: BattleService) { }

  ngOnInit() {
  }

  getBattleSummary(): void {
    this.battleService.getBattleSummary()
      .subscribe(summary => this.battleSummary = summary)
  }

  public clearBattleSummary(): void {
    console.log('clearing battle summary')
    this.battleSummary = []
    console.log(this.battleSummary)
  }
}
