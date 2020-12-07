import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


const base_url = environment.base_url

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  constructor( private http: HttpClient ) { }

  cargarUbicacion(){
    const url = `${ base_url }location`
    return this.http.get( url ).pipe(
      map( ( val:any ) => val.datosAPI )
    )
  }


  cliUbActual( city = '' ){
    const url = `${ base_url }current/${ city }`
    return this.http.get( url ).pipe(
      map( ( val:any ) => val.datosAPI )
    )
  }

  forecast( city ){
    const url = `${ base_url }forecast/${ city }`
    return this.http.get( url ).pipe(
      map( ( val:any ) => val.datosAPI )
    )
  }


}
