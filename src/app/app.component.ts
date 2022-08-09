import { Component } from '@angular/core';
import { CepServiceService } from './cep-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cep';

  constructor(private cepService: CepServiceService) {}

  consultaCep(valor, form) {
    this.cepService.buscar(valor).subscribe((dados) => {
      this.populaForm(dados, form);
    });
  }

  populaForm(dados, form) {
    form.setValue({
      cep: dados.cep,
      logradouro: dados.logradouro,
      bairro: dados.bairro,
      cidade: dados.localidade,
      uf: dados.uf,
    });
  }
}
