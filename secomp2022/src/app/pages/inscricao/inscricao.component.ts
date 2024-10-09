import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import { AuthService } from 'src/app/auth.service';
import { SecompAPIService } from '../../secompAPI.service';

@Component({
	selector: 'app-inscricao',
	templateUrl: './inscricao.component.html',
	styleUrls: ['./inscricao.component.scss']
})
export class InscricaoComponent implements OnInit {
	formGroup!: UntypedFormGroup
	controlNames!: { [key: string]: string }
	postMessage: any = {
		message: ''
	}
	isLoading = false
	token!: string
	success = false;
	validNomeField: boolean = true
	validNumeroField: boolean = true
	validEmailField: boolean = true

	valid = true
	constructor(
		private formBuilder: UntypedFormBuilder,
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
		this.formGroup = new UntypedFormGroup({
			[tmp.nome]: new UntypedFormControl(null, Validators.required),
			[tmp.email]: new UntypedFormControl(null, Validators.required),
			[tmp.instituicao]: new UntypedFormControl(null),
		})
	}

	submit(formValue: any) {
		this.authService.login().subscribe(res => {
			this.token = res.access
			this.isLoading = true
			console.log(this.isLoading)

			this.inscricaoService.postParticipant(formValue, this.token).subscribe(
				{
					next: (res) => {
						this.postMessage = res
						this.success = true
						this.isLoading = false

						const modal = document.getElementById('modal')

						if (modal) {
							modal.style.display = 'block'
							modal.classList.add('show')
						}
					},
					error: (err) => {
						console.log(err)

						this.valid = false

						if (err.error.nome) {
							this.validNomeField = false
							this.postMessage.message = 'O nome inserido é inválido.'
						}
						if (err.error.email) {
							this.validEmailField = false
							this.postMessage.message = 'O e-mail inserido é inválido.'
						}

						if (this.validEmailField && this.validNomeField) {
							this.postMessage.message = 'Algo deu errado. Tente novamente.'
						}

						this.success = false
						this.isLoading = false
					}
				}
			)
		})
	}

}
