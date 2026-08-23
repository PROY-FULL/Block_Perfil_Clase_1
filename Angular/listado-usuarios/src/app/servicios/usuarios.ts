import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';

@Service()
export class Usuarios {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  //constructor(private http: HttpClient) { }

  private http = inject(HttpClient);

  obtenerDatos(): Observable<any> {

    return this.http.get(this.apiUrl);
  }
}
