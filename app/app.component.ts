import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl:'app/app.component.html',
  styleUrls: ['app/main.css'],
})
export class AppComponent {
    title = 'Tour of Heroes';
    navMenuItems:string[] = ["team","about","company"];
}
