import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  formValue: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();

  }

  ngOnInit(): void {
  }

  createForm(): void {
    this.formValue = this.fb.group({
      // Definicion de un form control
      // 1. Argumento. Valor por defecto
      // 2. Argumento. Validadores sincronos
      // 3. Argumento. Validadores asincronos
      // name: ['', , ],

      name     : ['Juan Antonio'],
      lastName : ['Pavon'],
      email    : ['japc.testing@gmail.com']
    });
  }

  saveForm(): void {
    console.log(this.formValue);

  }
}
