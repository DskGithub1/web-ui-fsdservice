import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ConnectionErrorComponent } from './components/connection-error/connection-error.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [    
    HeaderComponent,
    ConnectionErrorComponent,
    LoaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent, 
    ConnectionErrorComponent,
    LoaderComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
