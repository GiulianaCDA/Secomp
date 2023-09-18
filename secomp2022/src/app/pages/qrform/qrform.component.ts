import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import { AuthService } from 'src/app/auth.service';

import { SecompAPIService } from '../../secompAPI.service';

@Component({
  selector: 'app-qrform',
  templateUrl: './qrform.component.html',
  styleUrls: ['./qrform.component.scss']
})

export class QrformComponent implements OnInit {
  formId: Number | string = 0
  token!: string

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private qrformService: SecompAPIService,
  ) { }

  ngOnInit(): void {
    this.formId = this.route.snapshot.url[0].path.split('-')[1];
    this.authService.login().subscribe(res => {
      this.token = res.access
    })
    this.qrformService.getFormUrl(this.formId, this.token).subscribe(
      res => {
        window.location.href = res.url
      },
      err => {
        this.router.navigate(['/'])
      }
    )
  }

}
