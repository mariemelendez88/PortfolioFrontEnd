import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

//Importar los servicios


//Importar los componentes
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { ErrorComponent } from './components/error/error.component';
import { RedesComponent } from './components/menu/redes/redes.component';
import { NavbarComponent } from './components/menu/navbar/navbar.component';
import { PiedepaginaComponent } from './components/menu/piedepagina/piedepagina.component';
import { LoginComponent } from './components/menu/login/login.component';

import { AcercademiComponent } from './components/principal/acercademi/acercademi.component';
import { ExperienciaComponent } from './components/principal/experiencia/experiencia.component';
import { EstudiosComponent } from './components/principal/estudios/estudios.component';
import { ProyectosComponent } from './components/principal/proyectos/proyectos.component';
import { SkillsComponent } from './components/principal/skills/skills.component';
import { ReferenciasComponent } from './components/principal/referencias/referencias.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarDashboardComponent } from './components/menu/navbar-dashboard/navbar-dashboard.component';
import { DashboardexperienciaComponent } from './components/dashboard/dashboardexperiencia/dashboardexperiencia.component';
import { DashboardestudiosComponent } from './components/dashboard/dashboardestudios/dashboardestudios.component';
import { DashboardproyectosComponent } from './components/dashboard/dashboardproyectos/dashboardproyectos.component';
import { DashboardskillsComponent } from './components/dashboard/dashboardskills/dashboardskills.component';
import { DashboardredesComponent } from './components/dashboard/dashboardredes/dashboardredes.component';
import { DashboardreferenciasComponent } from './components/dashboard/dashboardreferencias/dashboardreferencias.component';
import { DashboardpersonaComponent } from './components/dashboard/dashboardpersona/dashboardpersona.component';

@NgModule({
  declarations: [
    AppComponent,
    RedesComponent,
    AcercademiComponent,
    ExperienciaComponent,
    EstudiosComponent,
    SkillsComponent,
    ProyectosComponent,
    ReferenciasComponent,
    NavbarComponent,
    PiedepaginaComponent,
    DashboardComponent,
    ErrorComponent,
    IndexComponent,
    NavbarDashboardComponent,
    LoginComponent,
    DashboardexperienciaComponent,
    DashboardestudiosComponent,
    DashboardproyectosComponent,
    DashboardskillsComponent,
    DashboardredesComponent,
    DashboardreferenciasComponent,
    DashboardpersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
