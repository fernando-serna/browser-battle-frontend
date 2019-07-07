import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Warrior } from '../warrior';
import { WarriorService } from '../warrior.service';
import { BattleComponent } from '../battle/battle.component';

@Component({
  providers: [BattleComponent],
  selector: 'app-warriors',
  templateUrl: './warriors.component.html',
  styleUrls: ['./warriors.component.css']
})
export class WarriorsComponent implements OnInit {
  warriors: Warrior[];

  constructor(private warriorService: WarriorService, private battle: BattleComponent) { }

  ngOnInit() {
    this.getWarriors();
  }

  getWarriors(): void {
    this.warriorService.getWarriors()
      .subscribe(warriors => this.warriors = warriors);
  }

  log(x) { console.log(x) }

  onSubmit(values) {
    this.warriors.forEach(warrior => {
      const payload: Warrior = {
        id: warrior.id,
        name: values[`${warrior.id}-name`],
        health: values[`${warrior.id}-health`],
        attack: values[`${warrior.id}-attack`],
        defense: values[`${warrior.id}-defense`]
      }
    
      this.warriorService.updateWarrior(payload)
        .subscribe()
    })

    this.battle.clearBattleSummary();
  }

}
