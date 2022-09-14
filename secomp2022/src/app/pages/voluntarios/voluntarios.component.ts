import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
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
  validNomeField: boolean = true
  validNumeroField: boolean = true
  validEmailField: boolean = true

  valid = true
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private voluntariosService: VoluntariosService,
  ) { }

  ngOnInit(): void {
    this._initControlNames()
    this._createForm();
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
      [tmp.curso]: new FormControl(null, Validators.required),
      [tmp.email]: new FormControl(null,  Validators.required),
      [tmp.numero]: new FormControl(null,  Validators.required),
    })
  }

  submit(formValue: any) {

    this.voluntariosService.postVoluntario(formValue, this.token)
    .subscribe(res => {
      console.log('jfj');
    })
    
    this.router.navigate(['../../'], {
      relativeTo: this.route,
    })
 }

}
