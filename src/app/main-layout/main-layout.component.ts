import { Component } from '@angular/core';

@Component({
  selector: 'main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {

sideBarOpen = true;


constructor(){}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

}
sideBarToggler(){
  this.sideBarOpen = !this.sideBarOpen;
}


}
