import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  // user = {
  //   name: 'Juan Antonio',
  //   lastName: 'Pavón Carmona',
  //   email: 'japc.testing@gmail.com'
  // };

  user = {
    name: '',
    lastName: '',
    email: ''
  };


  constructor() { }

  ngOnInit(): void {
  }

  saveForm(formValues: NgForm): void {
    console.log(formValues);
    console.log(formValues.value);

    // En el caso que el formulario este vacío y los campos estee vacíos,
    // se marcan como touched (modificados) para que se muestre el mensaje
    // de error y se valide cada campo.
    if (formValues.invalid) {
      Object.values( formValues.controls).forEach( control => {
        control.markAllAsTouched();
      });
      return;
    }
  }
}
