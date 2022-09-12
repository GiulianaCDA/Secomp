import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
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

  postVoluntario(data: Voluntario){
    return this.http.post<any>(`${this.url}/voluntarios`, data);
  }
}
