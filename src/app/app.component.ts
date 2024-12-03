import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    document.body.classList.toggle('dark', false); // Certifica-se de desativar o tema escuro
  }
}
