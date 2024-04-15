import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaIndexComponent } from './consulta-index/consulta-index.component';
import { ConsultaCreateComponent } from './consulta-create/consulta-create.component';
import { FormsModule } from '@angular/forms';
import { ConsultaEditComponent } from './consulta-edit/consulta-edit.component';
import { ConsultaRoutingModule } from './consulta-routing.module';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  declarations: [
    ConsultaIndexComponent,
    ConsultaCreateComponent,
    ConsultaEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ConsultaRoutingModule
  ]
})
export class ConsultaModule { }
