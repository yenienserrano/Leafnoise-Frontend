import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/service/clima.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  public ciudad

  constructor( private clima: ClimaService ) { }

  ngOnInit(): void {

    this.clima.cargarUbicacion()
      .subscribe(val => {
        this.ciudad = val
      })
  }
}
