import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EsperaComponent } from './espera/espera.component';

// TODO(1) Adicionar uma rota na raiz para o componente espera
const routes: Routes = [
  {path: '', component: EsperaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
