import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = environment.apiUrl
  private user: string = environment.user
  private password: string = environment.password
  private token!: string

  constructor(
    private http: HttpClient,
  ) { }


  login(){
    const data = {
      username: this.user,
      password: this.password
    }
    return this.http.post<any>(`${this.url}/token/`, data)
  }
}
