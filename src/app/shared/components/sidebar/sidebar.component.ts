import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  public fullText:boolean = false;

  toggle(){
  this.fullText = !this.fullText;
  }

}
