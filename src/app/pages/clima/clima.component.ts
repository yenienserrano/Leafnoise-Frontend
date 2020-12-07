import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/service/clima.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html'
})
export class ClimaComponent implements OnInit {

  public ciudad

  constructor( private clima: ClimaService ) { }

  ngOnInit(): void {
    this.elegirCiudad('')
  }

  elegirCiudad(value){
    this.clima.cliUbActual( value )
      .subscribe(val => {
        this.ciudad = val
      })
  }
}
