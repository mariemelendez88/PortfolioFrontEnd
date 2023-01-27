import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardestudiosComponent } from './components/dashboard/dashboardestudios/dashboardestudios.component';
import { DashboardexperienciaComponent } from './components/dashboard/dashboardexperiencia/dashboardexperiencia.component';
import { DashboardpersonaComponent } from './components/dashboard/dashboardpersona/dashboardpersona.component';
import { DashboardproyectosComponent } from './components/dashboard/dashboardproyectos/dashboardproyectos.component';
import { DashboardredesComponent } from './components/dashboard/dashboardredes/dashboardredes.component';
import { DashboardreferenciasComponent } from './components/dashboard/dashboardreferencias/dashboardreferencias.component';
import { DashboardskillsComponent } from './components/dashboard/dashboardskills/dashboardskills.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children:[
      {path: 'dashboardexperiencia', component: DashboardexperienciaComponent},
      {path: 'dashboardestudios', component: DashboardestudiosComponent},
      {path: 'dashboardproyectos', component: DashboardproyectosComponent},
      {path: 'dashboardskills', component: DashboardskillsComponent},
      {path: 'dashboardredes', component: DashboardredesComponent},
      {path: 'dashboardreferencias', component: DashboardreferenciasComponent},
      {path: 'dashboardpersona', component: DashboardpersonaComponent}
    ]
  },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }