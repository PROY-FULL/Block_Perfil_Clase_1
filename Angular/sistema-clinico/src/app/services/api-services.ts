import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';

@Service()
export class ApiServices {
  private http = inject(HttpClient);
  private apiurl = 'https://localhost:7137/api';

  get(url: string): Observable<any> {
    return this.http.get(this.apiurl + url)
  }

  put(url: string, body: any): Observable<any> {
    return this.http.put(this.apiurl + url, body)
  }

  post(url: string, body: any): Observable<any> {
    return this.http.post(this.apiurl + url, body)
  }
}
