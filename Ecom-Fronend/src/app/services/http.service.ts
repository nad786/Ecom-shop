import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  get(url: string, header = {}) {
    return this.http.get(url);
  }

  post(url: string, body: any, header = {}) {
    return this.http.post(url, body);
  }
}
