import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActualizarSaldoService {

  constructor() { 
    this.isConsigno();
  }
  saldo:number=100000;
  consigno=false;
  nroretiro:number=0;
  actualizar(saldo){
    if(this.consigno==false){
      this.saldo=100000+parseInt(saldo);
      this.consigno=true;
    }else{
      this.saldo=this.getSaldo()+parseInt(saldo);
      this.consigno=true;
      console.log("A"+ this.getSaldo());
    }
   
 
  }
  retirar(cantRetiro){
    if(cantRetiro< this.getSaldo() && this.getNroRetiro()<3){
      this.saldo=this.saldo-cantRetiro;
      this.nroretiro++;
      console.log(this.saldo);
    }else{
      console.log('Ya no pvto');
    }
    
  }

  getNroRetiro(){
    return this.nroretiro;
  }
  getSaldo(){
    return this.saldo;
  }
  isConsigno(){
    return this.consigno;
  }
}
