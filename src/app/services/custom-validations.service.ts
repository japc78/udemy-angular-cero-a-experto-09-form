import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidationsService {

  constructor() { }

  noSurname( control: FormControl): {[s: string]: boolean} {
    console.log(control.value.toLowerCase());
    console.log(control);


    if (control.value?.toLowerCase() === 'herrera') {
      return {
        noSurname: true
      };
    }
    return null;
  }
}
