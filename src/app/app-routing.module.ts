import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalificarComponent } from './components/calificar/calificar.component';
import { HomeComponent } from './components/home/home.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';
import { RakingComponent } from './components/raking/raking.component';

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
        path:'calificar',
        component:CalificarComponent

    },

    {
      path:'ingresos',
      component:IngresosComponent

   },

  {
    path:'raking',
    component:RakingComponent
    

}
    
];
@NgModule ({
    imports : [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule { }
