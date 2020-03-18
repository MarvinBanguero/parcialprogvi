import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActualizarSaldoService
} from '../services/actualizar-saldo.service';
import {
  Location
} from '@angular/common';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  constructor(private act: ActualizarSaldoService, private _location: Location) {
    this.consultaSaldo();
  }
  saldo=0;
  contador = 0;
  consultaSaldo() {
    const a=this.act.isConsigno
    console.log(a);
    if(this.act.isConsigno){
      this.saldo = this.act.getSaldo();
    }
    
    if(this.saldo==undefined){
      this.saldo =100000;
    }
    
    console.log(this.saldo);
    this.contador++;
  }

  back() {
    this._location.back();
  }
  ngOnInit() {}

}
