import { Component, OnInit,  Input, } from '@angular/core';
import { AbstractControl, UntypedFormGroup } from '@angular/forms'

@Component({
  selector: 'secomp-input',
  templateUrl: './secomp-input.component.html',
  styleUrls: ['./secomp-input.component.scss']
})
export class SecompInputComponent implements OnInit {
  @Input() label!: string
  @Input() controlName!: string 
  @Input() formGroup!: UntypedFormGroup 

  constructor() { }

  ngOnInit(): void {
  }

  get formControl() {
    return this.formGroup.get(this.controlName)
  }

}
