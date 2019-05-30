import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Espera } from '../services/espera';
import { EsperasService } from '../services/esperas.service';
import { ResponseData } from '../services/responsedata';

@Component({
  selector: 'app-espera',
  templateUrl: './espera.component.html',
  styleUrls: ['./espera.component.css']
})
export class EsperaComponent implements OnInit {
  // TODO(1) Declarar um atributo Observable<ResponseData<Espera[]>> para os itens da lista de espera
  esperas$: Observable<ResponseData<Espera[]>>;
  // TODO(2) Declarar um atributo Espera e atribuir um objeto Espera
  espera: Espera = new Espera();

  // TODO(3) Adicionar um parâmetro do tipo EsperaService
  constructor(private esperaService: EsperasService) { }

  ngOnInit() {
    // TODO(4) Fazer um subscribe para verificar as alterações em refreshNeeded do EsperaService declarado no passo 3
      // No subscribe deve ser invocado o método getEsperas do EsperaService
      this.esperaService.refreshNeeded
      .subscribe(() => {
        this.esperas$ = this.esperaService.getEsperas();
      });

      this.esperas$ = this.esperaService.getEsperas();
  }

  // TODO(5) Declarar um método chamado salvar que recebe um Espera como parâmetro
    // Inovar o método salvarEspera do EsperaService. Não esquecer de realizar o subscribe
  salvar(espera: Espera) {
    this.esperaService.salvarEspera(espera)
      .subscribe();
  }

  // TODO(6) Declarar um método chamado remover que recebe um Espera como parâmetro
    // Inovar o método removerEspera do EsperaService. Não esquecer de realizar o subscribe
  remover(espera: Espera) {
    this.esperaService.removerEspera(espera)
      .subscribe();
  }

}
