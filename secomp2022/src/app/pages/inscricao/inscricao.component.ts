import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import { AuthService } from 'src/app/auth.service';
import { SecompAPIService } from '../../secompAPI.service';

@Component({
	selector: 'app-inscricao',
	templateUrl: './inscricao.component.html',
	styleUrls: ['./inscricao.component.scss']
})
export class InscricaoComponent implements OnInit {
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
		private inscricaoService: SecompAPIService,
	) { }

	ngOnInit(): void {
		this._initControlNames()
		this._createForm();
	}

	private _initControlNames() {
		this.controlNames = {
			nome: 'nome',
			email: 'email',
			instituicao: 'instituicao',
		}
	}

	private _createForm() {
		const tmp = this.controlNames
		this.formGroup = new FormGroup({
			[tmp.nome]: new FormControl(null, Validators.required),
			[tmp.email]: new FormControl(null, Validators.required),
			[tmp.instituicao]: new FormControl(null),
		})
	}

	submit(formValue: any) {
		this.authService.login().subscribe(res => {
			this.token = res.access
			this.inscricaoService.postParticipant(formValue, this.token).subscribe(
				res => {
					this.postMessage = res
					this.success = true
				},
				err => {
					if (err.status == 400) {
						this.postMessage.message = 'Este e-mail já foi cadastrado.'
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
