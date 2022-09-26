import { Component } from '@angular/core';

import data from 'fixtures/data.json';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent {
  data = data;
  destinationIndex: number = 0;

  changeDestination(index: number) {
    this.destinationIndex = index;
  }
}
