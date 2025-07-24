import { Routes } from '@angular/router';

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
  },
  {
    path: 'registrate',
    loadComponent: () => import('./views/registrate/registrate.component').then(m => m.RegistrateComponent)
  },

  {
    path: 'registrar-alumno',
    loadComponent: () => import('./views/registros-tablas/estudiantes/estudiantes.component').then(m => m.EstudiantesComponent)
  },
  {
    path: 'editar-estudiante/:id_borrar',
    loadComponent: () => import('./views/registros-tablas/editar-estudiantes/editar-estudiantes.component').then(m => m.EditarEstudiantesComponent)
  },

   {
    path: 'registrar-matricula',
    loadComponent: () => import('./views/registros-tablas/crear-matricula/crear-matricula.component').then(m => m.CrearMatriculaComponent)
  },

  {
    path: 'editar-matricula/:id_borrar',
    loadComponent: () => import('./views/registros-tablas/editar-matricula/editar-matricula.component').then(m => m.EditarMatriculaComponent)
  },

    {
    path: 'registrar-mensualidad',
    loadComponent: () => import('./views/registros-tablas/crear-mensualidad/crear-mensualidad.component').then(m => m.CrearMensualidadComponent)
  },

  {
    path: 'editar-mensualidad/:id_borrar',
    loadComponent: () => import('./views/registros-tablas/editar-mensualidad/editar-mensualidad.component').then(m => m.EditarMensualidadComponent)
  },

  {
    path: 'inicial',
    loadComponent: () => import('./views/internas-grados/inicial/inicial.component').then(m => m.InicialComponent)
  },


  

];
