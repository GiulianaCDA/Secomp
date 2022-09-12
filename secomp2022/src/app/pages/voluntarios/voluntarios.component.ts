import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

import { VoluntariosService } from './voluntarios.service';
@Component({
  selector: 'app-voluntarios',
  templateUrl: './voluntarios.component.html',
  styleUrls: ['./voluntarios.component.scss']
})
export class VoluntariosComponent implements OnInit {
  formGroup!: FormGroup 
  controlNames!: { [key: string]: string }
  token!: string
  valid = true
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private voluntariosService: VoluntariosService
  ) { }

  ngOnInit(): void {
    this._initControlNames()
    this._createForm();
    console.log(this.nomeControl)
    this.authService.login().subscribe(res => {
      this.token = res.access
    })
  }

  private _initControlNames() {
    this.controlNames = {
      nome: 'nome',
      curso: 'curso',
      email: 'email',
      numero: 'numero',
    }
  }

  private _createForm() {
    const tmp = this.controlNames
    this.formGroup = new FormGroup({
      [tmp.nome]: new FormControl(null,  Validators.required),
      [tmp.curso]: new FormControl(null),
      [tmp.email]: new FormControl(null,  Validators.required),
      [tmp.numero]: new FormControl(null,  Validators.required),
    })
  }

  submit(formValue: any) {
    console.log(this.nomeControl)
    this.voluntariosService.postVoluntario(formValue, this.token)
    .subscribe(res=>{
      console.log(res)
    })
 }

 get nomeControl(){
  return this.formGroup.get('nome')?.value
 }

}
