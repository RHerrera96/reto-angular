import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthServiceService} from '../../shared/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formulario : FormGroup;
  bandera = false;
  constructor(private f : FormBuilder, public route: Router, public authService: AuthServiceService) { 
    this.formulario = this.f.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  iniciarSesion(){
    this.authService.isVerificado = false;
    this.authService.isIncorrectUser = false;
    if(this.formulario.invalid){
      this.bandera = true;
    }else{
      this.authService.SignIn(this.formulario.value.usuario, this.formulario.value.contrasena);
    }
  }
}
