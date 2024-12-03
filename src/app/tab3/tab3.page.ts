import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  usuario: { nome: string; email: string; senha: string } = {
    nome: '',
    email: '',
    senha: '',
  };

  constructor(private router: Router) {}

  ngOnInit() {
    const dadosUsuario = localStorage.getItem('usuario');
    if (dadosUsuario) {
      const usuario = JSON.parse(dadosUsuario);
      this.usuario = {
        ...usuario,
        senha: usuario.senha.length > 1 ? '****' + usuario.senha.slice(-1) : '*',
      };
    }
  }
  // Função para redirecionar para a tela de cadastro
  sair() {
    this.router.navigate(['/cadastro']);
  }
}

