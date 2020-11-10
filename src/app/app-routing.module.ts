import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';
import { RecomendadasComponent } from './components/recomendadas/recomendadas.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { InicioComponent } from './components/inicio/inicio.component';
const routes : Routes = [ 
    {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'

    },

    {
        path:'home',
        component:HomeComponent

    },


    {
        path:'busqueda',
        component:BusquedaComponent

    },

    
    {
        path:'recomendadas',
        component:RecomendadasComponent

    },


    {
        path:'inicio',
        component:InicioComponent

    },

    {
      path:'ingresos',
      component:IngresosComponent

   }

    
];
@NgModule ({
    imports : [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule { }
