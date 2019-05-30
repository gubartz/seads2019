import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Espera } from './espera';
import { HttpClient } from '@angular/common/http';
import { ResponseData } from './responsedata';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EsperasService {
  // TODO(1) Definir dois atributos
  // apiEsperasUrl do tipo string
  // refreshNeeded do tipo Subject<void>()
  private apiEsperasUrl: string;
  private refreshNeeded$ = new Subject<void>();

  // TODO(2) Definir um método get que retorna o atributo refreshNeeded
  // getter para o atributo refreshNeeded
  get refreshNeeded() {
    return this.refreshNeeded$;
  }

  // TODO(3) Definir um atributo do tipo HttpClient no construtor
  constructor(private http: HttpClient) {
    // TODO(4) Definir a Url do webservice e atribuir para o atributo de classe definido no passo 1
    this.apiEsperasUrl = environment.apiUrl + 'esperas';
  }

  // TODO(5) Definir um método getEsperas que retorna uma Observable de ResponseData de uma vetor de esperas
    // TODO(6) Utilizar o atributo defindo no passo 2 para e o método get com o apiEsperasUrl para retornar um Observable
  getEsperas(): Observable<ResponseData<Espera[]>> {
    return this.http.get<ResponseData<Espera[]>>(this.apiEsperasUrl);
  }

  // TODO (7) Definir um método chamado salvarEspera que recebe como argumento um Espera e retorna um Observable de Espera
    // Utilizar o atributo defindo no passo 2 para e o método post com o apiEsperasUrl passando o argumento Espera
    // Utilizar um pipe para acionar o refreshNeeded.next()
  salvarEspera(espera: Espera): Observable<Espera> {
    return this.http.post<Espera>(this.apiEsperasUrl, espera)
      .pipe(
        tap(() => {
          this.refreshNeeded$.next();
        })
      );
  }

  // TODO (8) Definir um método chamado removerEspera que recebe um Espera e retorna um Observable de Espera
   // Utilizar o atributo defindo no passo 2 para e o método delete com o apiEsperasUrl montando a rota com o id do Espera passado
   removerEspera(espera: Espera): Observable<Espera> {
    const deleteUrl = this.apiEsperasUrl + '/' + espera.id;

    return this.http.delete<Espera>(deleteUrl)
      .pipe(
        tap(() => {
          this.refreshNeeded$.next();
        })
      );
  }
}

