import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  user = {
    name: 'Juan Antonio',
    lastName: 'Pavón Carmona',
    email: 'japc.testing@gmail.com'
  };

  constructor() { }

  ngOnInit(): void {
  }

  saveForm(formValues: NgForm): void {
    console.log(formValues);
    console.log(formValues.value);
  }
}
