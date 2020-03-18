import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) {
    this.validarUsuario();
   }
  
  password:any;
  usuario:any;

  validarUsuario(){
    if(this.usuario=="prueba"&& this.password=="1234"){
      this.router.navigate(['menu']);
    }
  }
  ngOnInit() {
  }

}
