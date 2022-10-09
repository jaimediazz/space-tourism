import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  bgImage: Array<String> = [
    "url('../assets/home/background-home-desktop.jpg')",
    "url('../assets/destination/background-destination-desktop.jpg')",
    "url('../assets/crew/background-crew-desktop.jpg')",
    "url('../assets/technology/background-technology-desktop.jpg')"
  ];
  bgIndex: number = 0;
  
  ngOnInit(): void {
    let bgIndexStorage = sessionStorage.getItem("bgIndex");
    if(bgIndexStorage) {
      this.bgIndex = parseInt(bgIndexStorage);
    }
  }

  changeBackgroundImage(index: number) {
    sessionStorage.setItem("bgIndex", index.toString());
    this.bgIndex = index;
  }

}
