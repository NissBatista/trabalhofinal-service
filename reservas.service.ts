import { Injectable } from '@angular/core';
import { HttpClient , HttpClientModule} from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  constructor(private http: HttpClient) {}
  private readonly url = "https://allramos.github.io/desenvolvimento-web/lista-reservas.json"
  
  reservasList: any

  requisicao(){
    return this.http.get<any>(this.url)
    .pipe(
      tap(console.log)
      
    )
  }
}
