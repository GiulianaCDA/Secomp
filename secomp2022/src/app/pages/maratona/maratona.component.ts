import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import { AuthService } from 'src/app/auth.service';
import { SecompAPIService } from '../../secompAPI.service';

@Component({
  selector: 'app-maratona',
  templateUrl: './maratona.component.html',
  styleUrls: ['./maratona.component.scss']
})
export class MaratonaComponent implements OnInit {
  formGroup!: FormGroup 
  controlNames!: { [key: string]: string }
  postMessage: any = {
    message: ' '
  }
  token!: string
  success = false;
  validNomeField: boolean = true
  validNumeroField: boolean = true
  validEmailField: boolean = true

  valid = true
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private maratonaService: SecompAPIService,
  ) { }

  ngOnInit(): void {
    this._initControlNames()
    this._createForm();
  }

  private _initControlNames() {
    this.controlNames = {
      nome_equipe: 'nome_equipe',
      nome_lider: 'nome_lider',
      email: 'email',
      instituicao: 'instituicao',
      nome2: 'nome2',
      instituicao2: 'instituicao2',
      email2: 'email2',
      nome3: 'nome3',
      instituicao3: 'instituicao3',
      email3: 'email3',
    }
  }

  private _createForm() {
    const tmp = this.controlNames
    this.formGroup = new FormGroup({
      [tmp.nome_equipe]: new FormControl(null,  Validators.required),
      [tmp.nome_lider]: new FormControl(null,  Validators.required),
      [tmp.email]: new FormControl(null, Validators.required),
      [tmp.instituicao]: new FormControl(null,  Validators.required),
      [tmp.nome2]: new FormControl(null),
      [tmp.instituicao2]: new FormControl(null),
      [tmp.email2]: new FormControl(null),
      [tmp.nome3]: new FormControl(null),
      [tmp.instituicao3]: new FormControl(null),
      [tmp.email3]: new FormControl(null),
    })
  }

  submit(formValue: any) {
    this.authService.login().subscribe(res => {
      this.token = res.access
      this.maratonaService.postTimeMaratona(formValue, this.token).subscribe(
      res => {
        this.postMessage = res
        this.success = true
      },
      err => {
        if (err.status == 400) {
          this.postMessage.message = 'Este nome de equipe já existe. Tente outro.'
        }
        else {
          this.postMessage.message = 'Algo deu errado. Tente novamente.'
        }
        this.success = false
      }
      )
    })
}

}
