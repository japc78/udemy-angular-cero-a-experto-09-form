import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  formValues: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();

  }

  ngOnInit(): void {
  }

  //get es un gettet
  get nameInValid(): boolean {
    return this.formValues.get('name').invalid && this.formValues.get('name').touched;
  }
  get lastNameInValid(): boolean {
    return this.formValues.get('name').invalid && this.formValues.get('name').touched;
  }
  get emailInValid(): boolean {
    return this.formValues.get('name').invalid && this.formValues.get('name').touched;
  }

  createForm(): void {

    const validationBasic: Validators[] = [
      Validators.required,
      Validators.minLength(5)
    ];

    const validationEmail: Validators[] = [
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
    ];

    this.formValues = this.fb.group({
      // Definicion de un form control
      // 1. Argumento. Valor por defecto
      // 2. Argumento. Validadores sincronos
      // 3. Argumento. Validadores asincronos
      // name: ['', , ],

      name     : ['', validationBasic],
      lastName : ['', validationBasic],
      email    : ['', validationEmail],
      address  : this.fb.group({
        street : ['', validationBasic],
        city : ['', validationBasic],
      }),
    });
  }

  saveForm(): void {
    console.log(this.formValues);

    if (this.formValues.invalid) {
      return Object.values( this.formValues.controls).forEach( control => {
        control.markAllAsTouched();
      });
    }

  }
}
