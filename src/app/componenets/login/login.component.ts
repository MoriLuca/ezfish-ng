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

  //oggetto utilizzato come buffer per i dati in ingresso
  nuovoUtente = new User();

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
    this.showLoginRegisterForm = false;
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
    else{
      alert(this.txt.accessoNegato[this.rtmSvc.config.lang]);
    }
  }

  apriFormRegistrazione(){
    this.showLoginRegisterForm = true;
  }

  chiudiFormRegistrazione(){
    this.showLoginRegisterForm = false;
  }

  resetCampi(){
    if (confirm(this.txt.confirmReset[this.rtmSvc.config.lang]))
      this.nuovoUtente = new User();
  }

  confermaRegistrazione(){
    confirm(this.txt.confirmRegistration[this.rtmSvc.config.lang]);
    alert("not implemented yet");
  }
}

class Testi {
  namePlaceholder = ["Indirizzo E-Mail", "E-Mail Address"];
  passwordPlaceholder = ["Password","Password"];
  accedi = ["Accedi","Login"];
  registrati = ["Non ti sei ancora registrato?","Not yet Signed Up?"];

  //form di registrazione place holders
  regNamePh = ["Nome","Name"]
  regSurnamePh = ["Cognome","Surname"]
  regNicknamePh = ["Soprannome/Nickname","Nickname"]
  regShowPrivateNamePh = ["Vuoi permettere agli altri utenti di vedere il tuo nome e cognome?","Would you like other people to know your personal name and surname ?"]
  regEmailPh = ["Email per la registrazione","Registration Email"]
  //form di registrazione pulsanti
  btnRegistrati = ["Conferma Registrazione","Confirm and Sign Up"];
  sonoRegistrato = ["Sei già registrato?","Already Signed Up?"];
  btnClearRegistrazione = ["Ripulisci campi","Reset Fielsd"];

  //conferma registrazione utente
  confirmRegistration = ["Sei sicuro di voler confermare la registrazione?","Continue with the registration?"];

  //conferma pulizia campi registrazione
  confirmReset = ["Sicuro di voler cancellare i valori inseriti?","Do you really intend to clear the registration fields?"];

  //accesso non riuscito
  accessoNegato = ["Email o Password non valida.","Email or Password are incorrect."]

}

class InputCredenzialiLogin{
  email: string;
  password: string;
}