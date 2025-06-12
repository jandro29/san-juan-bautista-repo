import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { InicioControlPagosComponent } from './views/inicio-control-pagos/inicio-control-pagos.component';
import { InternaEstudiantesComponent } from './views/interna-estudiantes/interna-estudiantes.component';
import { PagoMensualidadesComponent } from './views/pago-mensualidades/pago-mensualidades.component';
import path from 'path';
import { Component } from '@angular/core';
import { ReportesComponent } from './views/reportes/reportes.component';
import { PagoMatriculasComponent } from './views/pago-matriculas/pago-matriculas.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },

    {
        path: '/inicio-control-de-pagos',
        component: InicioControlPagosComponent
    },

    {
        path: '/estudiantes',
        component: InternaEstudiantesComponent
    },

    {
        path: '/mensualidades',
        component: PagoMensualidadesComponent
    },

    
    {
        path: '/matriculas',
        component: PagoMatriculasComponent
    },

    {
        path: '/reportes',
        component: ReportesComponent
    }
]
