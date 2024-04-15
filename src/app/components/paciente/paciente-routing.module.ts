import { NgModule } from '@angular/core';
import { PacienteIndexComponent } from './paciente-index/paciente-index.component';
import { PacienteEditComponent } from './paciente-edit/paciente-edit.component';
import { PacienteCreateComponent } from './paciente-create/paciente-create.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'', redirectTo:'paciente-index', pathMatch:'full'},
  {path:'paciente-index', component:PacienteIndexComponent},
  {path:'paciente-create', component:PacienteCreateComponent},
  {path:'paciente-edit/:id', component:PacienteEditComponent}

];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild( routes)],
  exports:[RouterModule]
})
export class PacienteRoutingModule { }
