import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { InicioControlPagosComponent } from './views/inicio-control-pagos/inicio-control-pagos.component';
import path from 'path';
import { Component } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },

    {
        path: 'inicio-control-de-pagos',
        component: InicioControlPagosComponent
    }
]
