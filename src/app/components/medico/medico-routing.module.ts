import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicoIndexComponent } from './medico-index/medico-index.component';
import { MedicoCreateComponent } from './medico-create/medico-create.component';
import { MedicoEditComponent } from './medico-edit/medico-edit.component';


const routes: Routes = [
  {path:'', redirectTo:'medico-index', pathMatch:'full'}, 
   {path:'medico-index', component:MedicoIndexComponent},
  {path:'medico-create', component:MedicoCreateComponent},
  {path:'medico-edit/:id', component:MedicoEditComponent}

];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild( routes)],
  exports:[RouterModule]
})
export class MedicoRoutingModule { }
