import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorComponent } from './components/error/error.component';
import { IndexComponent } from './components/index/index.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    DashboardRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
