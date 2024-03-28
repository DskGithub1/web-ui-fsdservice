import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() headerText!: string;
  @Input() isCompanyLogoVisble?: boolean = false;
  public imageUrl = "assets/images/png/company logo.png";
  public isMobileDevice:boolean = false;
 
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    setTimeout(() => {
      this.isMobileDevice = window.innerWidth < 600 ? true : false;
    }, 100);
  }

  ngOnInit(): void {
    this.onWindowResize()
  }
}
