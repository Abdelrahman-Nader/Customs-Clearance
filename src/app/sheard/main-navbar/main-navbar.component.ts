import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent {

@Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();



constructor(){}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

}
toggleSideBar(){
this.toggleSideBarForMe.emit();
}



}
