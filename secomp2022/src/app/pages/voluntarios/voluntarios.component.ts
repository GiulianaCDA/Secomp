import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-voluntarios',
  templateUrl: './voluntarios.component.html',
  styleUrls: ['./voluntarios.component.scss']
})
export class VoluntariosComponent implements OnInit {
  formGroup!: FormGroup 
  controlNames!: { [key: string]: string }

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this._initControlNames()
    this._createForm();
    this.login();
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
      [tmp.nome]: new FormControl(null),
      [tmp.curso]: new FormControl(null),
      [tmp.email]: new FormControl(null),
      [tmp.numero]: new FormControl(null),
    })
  }

  submit(formValue: any) {
    console.log(formValue)
  }

  login(){
    this.authService.getToken().subscribe(res => 
      console.log(res)
    )
  }
}
