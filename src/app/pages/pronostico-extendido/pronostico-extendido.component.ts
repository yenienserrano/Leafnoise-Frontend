import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/service/clima.service';

@Component({
  selector: 'app-pronostico-extendido',
  templateUrl: './pronostico-extendido.component.html',
  styles: [
  ]
})
export class PronosticoExtendidoComponent implements OnInit {

  public ciudad
  public extendido

  constructor( private clima: ClimaService ) { }

  ngOnInit(): void {
    this.elegirCiudad('')
  }

  elegirCiudad(value){
    
    this.clima.forecast( value )
      .subscribe(val => {
        this.ciudad = val
        this.extendido = val.list 
      })
  }


}
