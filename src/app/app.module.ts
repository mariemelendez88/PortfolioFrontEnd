import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Importar los servicios


//Importar los componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modales/login/login.component';
import { LogoutComponent } from './modales/logout/logout.component';
import { RedesComponent } from './components/menu/redes/redes.component';
import { AcercademiComponent } from './components/principal/acercademi/acercademi.component';
import { ExperienciaComponent } from './components/principal/experiencia/experiencia.component';
import { EstudiosComponent } from './components/principal/estudios/estudios.component';
import { SkillsComponent } from './components/principal/skills/skills.component';
import { ProyectosComponent } from './components/principal/proyectos/proyectos.component';
import { ReferenciasComponent } from './components/principal/referencias/referencias.component';
import { NavbarComponent } from './components/menu/navbar/navbar.component';
import { PiedepaginaComponent } from './components/menu/piedepagina/piedepagina.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorComponent } from './components/error/error.component';
import { IndexComponent } from './components/index/index.component';
import { NavbarDashboardComponent } from './components/menu/navbar-dashboard/navbar-dashboard.component';
import { LogoApComponent } from './components/menu/logo-ap/logo-ap.component';
import { BotonLoginComponent } from './components/menu/boton-login/boton-login.component';
import { BotonLogoutComponent } from './components/menu/boton-logout/boton-logout.component';
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
    LoginComponent,
    LogoutComponent,
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
    LogoApComponent,
    BotonLoginComponent,
    BotonLogoutComponent,
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
