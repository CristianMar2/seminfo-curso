import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabelaRoutingModule } from './tabela-routing.module';
import { TabelaComponent } from './components/tabela/tabela.component';
import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    TabelaComponent
  ],
  imports: [
    CommonModule,
    TabelaRoutingModule,
    Component,
    MatTableModule
  ],
  exports: [
    Component,
    MatTableModule
  ]
})
export class TabelaModule { }
