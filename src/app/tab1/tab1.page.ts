import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  peso: number | null = null; // Permite null
  altura: number | null = null; // Permite null
  resultado: number | null = null; // Permite null
  historico: Array<{ peso: number; altura: number; imc: number }> = [];

  calcularIMC() {
    if (this.peso !== null && this.altura !== null) {
      const alturaEmMetros = this.altura / 100;
      const imc = this.peso / (alturaEmMetros * alturaEmMetros);
      this.resultado = parseFloat(imc.toFixed(2));

      // Adiciona ao histórico
      this.historico.push({
        peso: this.peso,
        altura: this.altura,
        imc: this.resultado
      });

      // Limpa os campos
      this.peso = null;
      this.altura = null;
    }
  }
}
