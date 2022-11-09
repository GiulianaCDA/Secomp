import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
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
    private voluntariosService: SecompAPIService,
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
      nome_equipe: 'nome_equipe',
      email: 'email_lider',
      numero: 'numero_lider',
      nome_lider: 'nome_lider',
      nome2: 'participante_2',
      nome3: 'participante_3'
    }
  }

  private _createForm() {
    const tmp = this.controlNames
    this.formGroup = new FormGroup({
      [tmp.nome_equipe]: new FormControl(null,  Validators.required),
      [tmp.email]: new FormControl(null, Validators.required),
      [tmp.numero]: new FormControl(null,  Validators.required),
      [tmp.nome_lider]: new FormControl(null,  Validators.required),
      [tmp.nome_2]: new FormControl(null,  Validators.required),
      [tmp.nome_3]: new FormControl(null,  Validators.required),
    })
  }

  submit(formValue: any) {
    this.voluntariosService.postVoluntario(formValue, this.token).subscribe(
    res => {
      this.postMessage = res
      this.success = true
    },
    err => {
      this.postMessage.message = 'Algo deu errado. Tente novamente.'
      this.success = false
    }
    )
 }

}
