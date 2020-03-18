import { Component, OnInit } from '@angular/core';
import { ActualizarSaldoService } from '../services/actualizar-saldo.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-consignacion',
  templateUrl: './consignacion.component.html',
  styleUrls: ['./consignacion.component.css']
})
export class ConsignacionComponent implements OnInit {

  constructor(private act :ActualizarSaldoService, private _location:Location,
    private router: Router) { }
  monto:any;
  saldoF:any;
  consignar(saldoA){
     this.saldoF=this.monto+saldoA;
     this.act.actualizar(this.saldoF);
     this.router.navigate(['menu/consignacion/nuevosaldo']);
  }
  back(){
    this._location.back();
  }
  ngOnInit() {
  }

}
