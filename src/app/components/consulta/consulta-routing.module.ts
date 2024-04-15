import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaIndexComponent } from './consulta-index/consulta-index.component';
import { ConsultaCreateComponent } from './consulta-create/consulta-create.component';
import { ConsultaEditComponent } from './consulta-edit/consulta-edit.component';


const routes: Routes = [
  {path:'', redirectTo:'consulta-index', pathMatch:'full'},
  {path:'consulta-index', component:ConsultaIndexComponent},
  {path:'consulta-create', component:ConsultaCreateComponent},
  {path:'consulta-edit/:id', component:ConsultaEditComponent}

];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild( routes)],
  exports:[RouterModule]
})
export class ConsultaRoutingModule { }
