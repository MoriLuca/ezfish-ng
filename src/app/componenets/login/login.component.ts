import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GlobalRuntimeConfigService, GlobalRuntimeConfig, User } from '../../services/global-runtime-config.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showLoginRegisterForm: boolean = false;
  txt = new Testi();
  rtmSvc : GlobalRuntimeConfigService;
  credenzialiLogin = new InputCredenzialiLogin();

  constructor(_globalRuntimeService :GlobalRuntimeConfigService) {
    this.rtmSvc = _globalRuntimeService;
  }

  ngOnInit() {
  }

  toggle(){
    this.rtmSvc.config.user.isLogged = !this.rtmSvc.config.user.isLogged; 
  }

  closeForm(){
    this.rtmSvc.config.login.showLoginForm = false;
  }

  accedi(_credenziali: InputCredenzialiLogin){
    if (_credenziali.email == "mori.luca@hotmail.it" && _credenziali.password == "0000"){
      this.rtmSvc.config.user.name = "Luca";
      this.rtmSvc.config.user.surname = "Mori";
      this.rtmSvc.config.user.nickname = "White";
      this.rtmSvc.config.user.isLogged = true;
      this.rtmSvc.config.user.showPrivateName = true;

      this.rtmSvc.config.login.showLoginForm = false;
    }
    
  }
}

class Testi {
  namePlaceholder = ["Indirizzo E-Mail", "E-Mail Address"];
  passwordPlaceholder = ["Password","Password"];
  accedi = ["Accedi","Login"]
  registrati = ["Non ti sei ancora registrato?","Not yet registered?"]
}

class InputCredenzialiLogin{
  email: string;
  password: string;
}