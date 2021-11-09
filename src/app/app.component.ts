import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  menu: string = 'recipes';

  showMenu(selectedMenu: string) {
    this.menu = selectedMenu;
  }
}
