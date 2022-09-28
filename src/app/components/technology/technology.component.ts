import { Component } from '@angular/core';

import data from 'fixtures/data.json';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent {
  data = data;
  technologyIndex: number = 0;

  changeTechnology(index: number) {
    this.technologyIndex = index;
  }

}
