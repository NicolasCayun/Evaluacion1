import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './log-in/log-in.page';
import { RContPage } from './r-cont/r-cont.page';
import { PProfPage } from './p-prof/p-prof.page';
import { PAluPage } from './p-alu/p-alu.page';
import { DProfPage } from './d-prof/d-prof.page';
import { DAluPage } from './d-alu/d-alu.page';

const routes: Routes = [
  { path: '', component: LoginPage},
  { path: 'login', component: LoginPage},
  { path: 'recuperar-contraseña', component: RContPage},
  { path: 'principal-profesor', component: PProfPage},
  { path: 'principal-alumno', component: PAluPage},
  { path: 'detalle-profesor', component: DProfPage},
  { path: 'detalle-alumno', component: DAluPage}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
