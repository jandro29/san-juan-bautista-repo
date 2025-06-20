import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { InternaEstudiantesComponent } from './views/interna-estudiantes/interna-estudiantes.component';
import { PagoMensualidadesComponent } from './views/pago-mensualidades/pago-mensualidades.component';
import { ReportesComponent } from './views/reportes/reportes.component';
import { PagoMatriculasComponent } from './views/pago-matriculas/pago-matriculas.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./views/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'inicio-control-de-pagos',
    loadComponent: () => import('./views/inicio-control-pagos/inicio-control-pagos.component').then(m => m.InicioControlPagosComponent)
  },
  {
    path: 'estudiantes',
    loadComponent: () => import('./views/interna-estudiantes/interna-estudiantes.component').then(m => m.InternaEstudiantesComponent)
  },
  {
    path: 'mensualidades',
    loadComponent: () => import('./views/pago-mensualidades/pago-mensualidades.component').then(m => m.PagoMensualidadesComponent)
  },
  {
    path: 'matriculas',
    loadComponent: () => import('./views/pago-matriculas/pago-matriculas.component').then(m => m.PagoMatriculasComponent)
  },
  {
    path: 'reportes',
    loadComponent: () => import('./views/reportes/reportes.component').then(m => m.ReportesComponent)
  }
];
