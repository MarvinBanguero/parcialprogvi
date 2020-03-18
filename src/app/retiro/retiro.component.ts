import { Component, OnInit } from '@angular/core';
import { ActualizarSaldoService } from '../services/actualizar-saldo.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retiro',
  templateUrl: './retiro.component.html',
  styleUrls: ['./retiro.component.css']
})
export class RetiroComponent implements OnInit {

  constructor(private act:ActualizarSaldoService, private _location:Location, private router:Router) { }

  monto:any;
  saldoF:any;
  retirar(){
    if(this.monto<=600000 && this.monto>=10000){
      this.act.retirar(parseInt(this.monto));
      console.log(this.act.getSaldo());
      this.router.navigate(['menu/retiro/nuevosaldo']);
    }
     
  }
  back(){
    this._location.back();
  }


  ngOnInit() {
  }

}
