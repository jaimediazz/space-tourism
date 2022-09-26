import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bgImage: Array<String> = [
    "url('../assets/home/background-home-desktop.jpg')",
    "url('../assets/destination/background-destination-desktop.jpg')",
    "url('../assets/crew/background-crew-desktop.jpg')",
    "url('../assets/technology/background-technology-desktop.jpg')"
  ];
  bgIndex: number = 0;

  changeBackgroundImage(index: number) {
    this.bgIndex = index;
  }

}
