import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'beauty-saloon';

  userName = 'Caio';
  userData = {
    email: 'caiofusco15@hotmail.com',
    age: 22,
    job: 'Estudante',
  }

}
