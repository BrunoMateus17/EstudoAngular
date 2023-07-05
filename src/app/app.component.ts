import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EstudoAngular';
  userName = "Bruno";
  UserData = {
    email:"brunoMateus@",
    role:"Admin"
  };
}
