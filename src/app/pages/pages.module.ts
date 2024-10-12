import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { LoginPage } from './log-in/log-in.page';
import { RContPage } from './r-cont/r-cont.page';
import { PProfPage } from './p-prof/p-prof.page';
import { PAluPage } from './p-alu/p-alu.page';
import { DProfPage } from './d-prof/d-prof.page';
import { DAluPage } from './d-alu/d-alu.page';
import { RegistroPage } from './registro/registro.page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginPage,
    RContPage,
    PProfPage,
    PAluPage,
    DProfPage,
    DAluPage,
    RegistroPage
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule, // Include SharedModule for common components and modules
    IonicModule, // Include FormsModule for form validation
    FormsModule // Include IonicModule for Ionic components
  ]
})
export class PagesModule { }
