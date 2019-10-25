import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { RoutesInicial } from './inicial';
import { RoutesQuemSomos } from './quem-somos';
import { RoutesContato } from './contato';


export const rotas = [
    { path: 'index', pathMatch: 'full', redirectTo: 'localhost:4200' },
    ...RoutesInicial,
    ...RoutesQuemSomos,
    ...RoutesContato
    
    
]
export const RoutingModule = RouterModule.forRoot(routes);