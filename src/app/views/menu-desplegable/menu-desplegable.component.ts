import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-menu-desplegable',
  imports: [],
  standalone: true,
  templateUrl: './menu-desplegable.component.html',
  styleUrl: './menu-desplegable.component.css'
})
export class MenuDesplegableComponent {
   isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(value => !value);
  }
}
