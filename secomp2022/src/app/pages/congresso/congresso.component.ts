import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, UntypedFormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import { AuthService } from 'src/app/auth.service';

import { SecompAPIService } from '../../secompAPI.service';

@Component({
  selector: 'app-congresso',
  templateUrl: './congresso.component.html',
  styleUrls: ['./congresso.component.scss']
})
export class CongressoComponent implements OnInit {

  formGroup!: UntypedFormGroup 
  controlNames!: { [key: string]: string }
  postMessage: any = {
    message: ' '
  }
  token!: string
  file!: File
  success = false;
  validNomeField: boolean = true
  validNumeroField: boolean = true
  validEmailField: boolean = true
  validArtigoField: boolean = true
  valid = true

  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private congressoService: SecompAPIService,
  ) { }

  ngOnInit(): void {
    this._initControlNames()
    this._createForm();
    console.log(this.postMessage)
  }

  private _initControlNames() {
    this.controlNames = {
      nome: 'nome',
      email: 'email',
      numero: 'numero',
      artigo: 'artigo',
    }
  }

  private _createForm() {
    const tmp = this.controlNames
    this.formGroup = new UntypedFormGroup({
      [tmp.nome]: new UntypedFormControl(null,  Validators.required),
      [tmp.email]: new UntypedFormControl(null,  Validators.required),
      [tmp.numero]: new UntypedFormControl(null,  Validators.required),
      [tmp.artigo]: new UntypedFormControl(null,  Validators.required),
    })
  }

  submit(formValue: any) {
    this.authService.login().subscribe(res => {
      this.token = res.access
      this.congressoService.postArtigo(formValue, this.file, this.token).subscribe(
      res => {
        this.postMessage = res
        this.success = true
      },
      err => {
        this.postMessage.message = 'Algo deu errado. Tente novamente.'
        this.success = false
      }
      )
    })
}

onChangeFile(event: any) {
  this.file = event.srcElement.files[0]
}

}
