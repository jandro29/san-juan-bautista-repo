import { Component, signal } from '@angular/core';
import { MenuDesplegableComponent } from '../menu-desplegable/menu-desplegable.component';
import { BarraSuperiorComponent } from '../barra-superior/barra-superior.component';

@Component({
  selector: 'app-inicio-control-pagos',
  imports: [MenuDesplegableComponent, BarraSuperiorComponent],
  templateUrl: './inicio-control-pagos.component.html',
  styleUrl: './inicio-control-pagos.component.css'
})
export class InicioControlPagosComponent {
  isMenuOpen = signal(false);
  toggleMenu() {
    this.isMenuOpen.update(value => !value);
  }
}