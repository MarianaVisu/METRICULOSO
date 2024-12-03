import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  nome: string = '';
  email: string = '';
  senha: string = '';
  formValid: boolean = false;

  constructor(private router: Router) {}

  validateForm() {
    this.formValid = this.nome.trim() !== '' && this.email.trim() !== '' && this.senha.trim() !== '';
  }

  cadastrar() {
    const usuario = {
      nome: this.nome,
      email: this.email,
      senha: this.senha,
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));
    console.log('Usuário cadastrado:', usuario);

    // Navegar para a tab1
    this.router.navigate(['/tabs/tab1']);
  }
}
