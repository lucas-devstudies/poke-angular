import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <h1>Aula de Services</h1>
  <app-card></app-card>
  <router-outlet></router-outlet>
  `, 
  styleUrls: ['./app.component.css']
})
/*passando o arquivo direto*/
export class AppComponent {
  title = 'pokemon';
}
