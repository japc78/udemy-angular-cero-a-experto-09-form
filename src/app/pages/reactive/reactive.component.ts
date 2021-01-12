import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  formValues: FormGroup;

  private validationBasic: Validators = [
    Validators.required,
    Validators.minLength(5)
  ];

  private validationEmail: Validators = [
    Validators.required,
    Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
  ];

  constructor(private fb: FormBuilder) {
    this.createForm();
    this.setForm();

  }

  ngOnInit(): void {
  }

  //get es un gettet
  get nameInvalid(): boolean {
    return this.formValues.get('name').invalid && this.formValues.get('name').touched;
  }
  get lastNameInvalid(): boolean {
    return this.formValues.get('name').invalid && this.formValues.get('name').touched;
  }
  get emailInvalid(): boolean {
    return this.formValues.get('name').invalid && this.formValues.get('name').touched;
  }
  get streetInvalid(): boolean {
    return this.formValues.get('address.street').invalid && this.formValues.get('address.street').touched;
  }
  get cityInvalid(): boolean {
    return this.formValues.get('address.city').invalid && this.formValues.get('address.city').touched;
  }
  get hobbies(): FormArray {
    // console.log(this.formValues.get('hobbies'));
    return this.formValues.get('hobbies') as FormArray;
  }


  createForm(): void {
    this.formValues = this.fb.group({
      // Definicion de un form control
      // 1. Argumento. Valor por defecto
      // 2. Argumento. Validadores sincronos
      // 3. Argumento. Validadores asincronos
      // name: ['', , ],

      name     : ['', this.validationBasic],
      lastName : ['', this.validationBasic],
      email    : ['', this.validationEmail],
      address  : this.fb.group({
        street : ['', this.validationBasic],
        city : ['', this.validationBasic],
      }),

      hobbies: this.fb.array([])
    });
  }

  setForm(): void {
    // Set Value es oblitarorio pasarle todos los campos del objeto, aunque esten vacios.
    // Reset borrar los elementos del formulario pero se le puede pasar valores por defecto.
    // this.formValues.setValue({
    this.formValues.reset({
      name: 'Juan Antonio',
      lastName: 'Pavon Carmona',
      email: 'japc.testing@gmail.com',
      address: {
        street: 'Pedreras 55',
        city: 'La Linea'
      }
    });

    // Una forma de precargar datos en los arrays de los formularios.
    ['Surf', 'Cocinar', 'Videojuegos'].forEach(
      valor => this.hobbies.push( this.fb.control(valor))
    );
  }


  saveForm(): void {
    console.log(this.formValues);

    if (this.formValues.invalid) {
      Object.values( this.formValues.controls).forEach( control => {
        control.markAllAsTouched();
        console.log(control);
      });
    }
    console.log(this.formValues.value);
    //Una vez enviado el formulario se realiza el reset para borrar el formulario
    this.formValues.reset();
  }


  addHobby(): void {
    this.hobbies.push(this.fb.control('', this.validationBasic));
  }

  delHobby(idx: number): void {
    this.hobbies.removeAt(idx);
  }
}
