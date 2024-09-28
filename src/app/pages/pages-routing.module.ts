import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage} from './Docente/Docente.page';
import { IndexPage } from './index/index.page';
import { NotFoundPage } from './not-found/not-found.page';
import { LogInPage } from './log-in/log-in.page';

const routes: Routes = [
  { path: '', component: HomePage},
  { path: 'Home', component: HomePage},
  { path: 'Index', component: IndexPage},
  { path: 'Not Found', component: NotFoundPage},
  { path: 'Log In', component: LogInPage},  {
    path: 'p-alu',
    loadChildren: () => import('./p-alu/p-alu.module').then( m => m.PAluPageModule)
  },
  {
    path: 'p-prof',
    loadChildren: () => import('./p-prof/p-prof.module').then( m => m.PProfPageModule)
  },
  {
    path: 'd-alu',
    loadChildren: () => import('./d-alu/d-alu.module').then( m => m.DAluPageModule)
  },
  {
    path: 'd-prof',
    loadChildren: () => import('./d-prof/d-prof.module').then( m => m.DProfPageModule)
  },
  {
    path: 'r-cont',
    loadChildren: () => import('./r-cont/r-cont.module').then( m => m.RContPageModule)
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
