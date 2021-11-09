import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() selectedMenu = new EventEmitter<string>();

  onRecipesMenu(): void {
    this.selectedMenu.emit('recipes');
  }

  onShoppingListMenu(): void {
    this.selectedMenu.emit('shoppingList');
  }
}
