import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteIndexComponent } from './paciente-index/paciente-index.component';
import { PacienteEditComponent } from './paciente-edit/paciente-edit.component';

import { PacienteCreateComponent } from './paciente-create/paciente-create.component';
import { FormsModule } from '@angular/forms';
import { PacienteRoutingModule } from './paciente-routing.module';
import { MenuComponent } from '../menu/menu.component';



@NgModule({
  declarations: [
    PacienteIndexComponent,
    PacienteCreateComponent,
    PacienteEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PacienteRoutingModule
  ]
})
export class PacienteModule { }
