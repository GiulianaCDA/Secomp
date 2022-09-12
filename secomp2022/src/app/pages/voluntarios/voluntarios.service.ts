import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AuthService } from 'src/app/auth.service';
import { environment } from 'src/environments/environment'
import { Voluntario } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class VoluntariosService {
  private url: string = environment.apiUrl

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) { }

  postVoluntario(data: Voluntario, token: any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token });

    let options = { headers: headers };

    return this.http.post(`${this.url}/subscribe/volunteer/`, data, options)
   
  }

}
