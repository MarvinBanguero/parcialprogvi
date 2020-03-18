import { Component, OnInit } from '@angular/core';
import { ActualizarSaldoService } from '../services/actualizar-saldo.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nuevosaldo',
  templateUrl: './nuevosaldo.component.html',
  styleUrls: ['./nuevosaldo.component.css']
})
export class NuevosaldoComponent implements OnInit {

  constructor(private act:ActualizarSaldoService, private _location:Location) { }
  saldo=this.act.getSaldo();

  back(){
    this._location.back();
  }
  ngOnInit() {
  }

}
