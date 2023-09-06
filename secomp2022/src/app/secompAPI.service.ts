import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AuthService } from 'src/app/auth.service';
import { environment } from 'src/environments/environment'
import { Voluntario, ArtigoInfo, TimeMaratona } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})

export class SecompAPIService {
  private url: string = environment.apiUrl

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) { }

  getFormUrl(formId: Number, token: any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token });

    let options = { headers: headers };

    return this.http.get<FormUrl>(`${this.url}/subscribe/form/${formId}/`, options)
  }
  
  postVoluntario(data: Voluntario, token: any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token });

    let options = { headers: headers };

    return this.http.post(`${this.url}/subscribe/volunteer/`, data, options)
  }

  postArtigo(data: ArtigoInfo, file: File, token: any){
    const formData = new FormData();
    formData.append("nome", data.nome);
    formData.append("email", data.email);
    formData.append("cpf", data.numero);
    formData.append("artigo", file);

    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token });

    let options = { headers: headers };

    return this.http.post(`${this.url}/subscribe/participant/`, formData, options)
  }

  postTimeMaratona(data: TimeMaratona, token: any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token });

    let options = { headers: headers };

    return this.http.post(`${this.url}/subscribe/maratona/`, data, options)
  }
}
interface FormUrl {
  url: string
}