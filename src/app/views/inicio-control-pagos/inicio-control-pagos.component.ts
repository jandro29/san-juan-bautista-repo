import { Component, signal, OnInit } from '@angular/core';
import { MenuDesplegableComponent } from '../menu-desplegable/menu-desplegable.component';
import { BarraSuperiorComponent } from '../barra-superior/barra-superior.component';

interface DashboardData {
  ingresosTotales: number;
  egresosTotales: number;
  balanceNeto: number;
  pagosConfirmados: number;
  pagosPendientes: number;
  pagosAtrasados: number;
  estudiantesActivos: number;
}

interface ActividadReciente {
  id: number;
  tipo: 'pago' | 'matricula' | 'pendiente';
  titulo: string;
  descripcion: string;
  tiempo: string;
  monto?: number;
  estado: 'completado' | 'pendiente' | 'atrasado';
}

@Component({
  selector: 'app-inicio-control-pagos',
  imports: [MenuDesplegableComponent, BarraSuperiorComponent],
  templateUrl: './inicio-control-pagos.component.html',
  styleUrl: './inicio-control-pagos.component.css',
})
export class InicioControlPagosComponent implements OnInit {
  // Señales para manejar el estado del dashboard
  dashboardData = signal<DashboardData>({
    ingresosTotales: 240758.0,
    egresosTotales: 198900.0,
    balanceNeto: 41858.0,
    pagosConfirmados: 6500,
    pagosPendientes: 500,
    pagosAtrasados: 85,
    estudiantesActivos: 1250,
  });

  actividadReciente = signal<ActividadReciente[]>([
    {
      id: 1,
      tipo: 'pago',
      titulo: 'Pago de Pensión - Marzo',
      descripcion: 'Servicio educativo - hace 2 horas',
      tiempo: '2 horas',
      monto: 450.0,
      estado: 'completado',
    },
    {
      id: 2,
      tipo: 'matricula',
      titulo: 'Nueva Matrícula Registrada',
      descripcion: 'Santiago Wallon - hace 4 horas',
      tiempo: '4 horas',
      monto: 200.0,
      estado: 'completado',
    },
    {
      id: 3,
      tipo: 'pendiente',
      titulo: 'Pago Pendiente',
      descripcion: 'Mensualidad de Noviembre - hace 1 día',
      tiempo: '1 día',
      estado: 'pendiente',
    },
  ]);

  isMenuOpen = signal(false);
  isLoading = signal(false);

  ngOnInit() {
    // Simular carga de datos
    this.cargarDatosDashboard();
  }

  toggleMenu() {
    this.isMenuOpen.update((value) => !value);
  }

  // Método para cargar datos del dashboard
  cargarDatosDashboard() {
    this.isLoading.set(true);

    // Simular llamada a API
    setTimeout(() => {
      // Aquí harías la llamada real a tu servicio
      // this.dashboardService.obtenerDatos().subscribe(data => {
      //   this.dashboardData.set(data);
      // });

      this.isLoading.set(false);
    }, 1000);
  }

  // Método para calcular porcentajes
  calcularPorcentaje(valor: number, total: number): number {
    return Math.round((valor / total) * 100);
  }

  // Método para formatear moneda
  formatearMoneda(valor: number): string {
    return new Intl.NumberFormat('es-PE', {
      style: 'currency',
      currency: 'PEN',
    }).format(valor);
  }

  // Método para obtener el color del estado
  obtenerColorEstado(estado: string): string {
    switch (estado) {
      case 'completado':
        return 'bg-green-100 text-green-800';
      case 'pendiente':
        return 'bg-yellow-100 text-yellow-800';
      case 'atrasado':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  // Método para refrescar datos
  refrescarDatos() {
    this.cargarDatosDashboard();
  }

  // Métodos para navegación (opcional)
  navegarAEstudiantes() {
    // Implementar navegación
    console.log('Navegando a estudiantes');
  }

  navegarAPensiones() {
    // Implementar navegación
    console.log('Navegando a pensiones');
  }

  navegarAReportes() {
    // Implementar navegación
    console.log('Navegando a reportes');
  }

  // Método para exportar datos
  exportarDatos() {
    const data = this.dashboardData();
    console.log('Exportando datos:', data);
    // Implementar lógica de exportación
  }
}
