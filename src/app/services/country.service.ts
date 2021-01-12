import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get('https://restcountries.eu/rest/v2/lang/es')
      // Para filtrar los datos y solo mostrar los que realmente son necesarios.
      // El primer map corresponde de los Reactive Extensions for JavaScrip de angular. https://angular.io/guide/rx-library#operators
      // El segundo map de los arrays en javascript.
      .pipe(
        map((resp: any[]) => {
          return resp.map( country =>  ({ name: country.name, code: country.alpha3Code}));
        })
      );
  }
}
