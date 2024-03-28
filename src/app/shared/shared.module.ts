import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ConnectionErrorComponent } from './components/connection-error/connection-error.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const ComponentList = [
  HeaderComponent,
  ConnectionErrorComponent,
  LoaderComponent,
  SidebarComponent
]

const ModuleList = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule
];



@NgModule({
  declarations: [    
    ComponentList
  ],
  imports: [
    ModuleList
  ],
  exports: [

    ComponentList,
    ModuleList
  ]
})
export class SharedModule { }
