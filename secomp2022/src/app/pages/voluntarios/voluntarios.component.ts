import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

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
  ) { }

  ngOnInit(): void {
    this._initControlNames()
    this._createForm();
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
}
