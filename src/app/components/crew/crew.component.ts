import { Component } from '@angular/core';

import data from 'fixtures/data.json';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent {
  data = data;
  crewIndex: number = 0;

  changeCrewMember(index: number) {
    this.crewIndex = index;
  }
  
}
