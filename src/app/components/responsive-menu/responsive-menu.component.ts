import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-responsive-menu',
  templateUrl: './responsive-menu.component.html',
  styleUrls: ['./responsive-menu.component.css']
})
export class ResponsiveMenuComponent {
  @Input() showMenu: boolean = false;

  @Output() closeMenuEvent = new EventEmitter();

  closeMenu() {
    this.closeMenuEvent.emit();
  }
}
