import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GlobalRuntimeConfigService, GlobalRuntimeConfig, User } from '../../services/global-runtime-config.service';
import { ApiService } from 'src/app/services/api.service';
import { core, ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showLoginRegisterForm: boolean = false;
  txt = new Testi();
  
  credenzialiLogin = new InputCredenzialiLogin();

  //oggetto utilizzato come buffer per i dati in ingresso
  nuovoUtente = new User();

  //services
  rtmSvc : GlobalRuntimeConfigService;
  api : ApiService

  constructor(_globalRuntimeService :GlobalRuntimeConfigService, _api: ApiService) {
    this.rtmSvc = _globalRuntimeService;
    this.api = _api;
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

    this.api.login(_credenziali).subscribe((success)=>{
      
      //let user  = new User();
      let user : User = success;

      if ( user.peopleId != -2 && user.peopleId != -3 ){
        this.rtmSvc.config.user = user;
        this.rtmSvc.config.user.isLogged = true;
        //cancello la password solo per maggiore sicurezza
        this.rtmSvc.config.user.password = "";
        console.log(this.rtmSvc.config.user);
        
        this.closeForm();
      }
      //email trovata, password sbagliata
      else if (user.peopleId == -2)
        alert(this.txt.emailOkPassNo[this.rtmSvc.config.lang]);
      //email non trovata
      else if (user.peopleId == -3)  
      alert(this.txt.emailNonTrovata[this.rtmSvc.config.lang]);
    },
    (err)=>{},
    ()=>{});
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

    let result; //errore non gestito
    confirm(this.txt.confirmRegistration[this.rtmSvc.config.lang]);
    this.api.addNewPerson(this.nuovoUtente).subscribe((success)=>{
      result = success;
      if ( result == 1)
        alert(this.txt.signupSuccess[this.rtmSvc.config.lang]);  
      
      else if ( result == -2)
        alert(this.txt.messaggioEmailEsistente[this.rtmSvc.config.lang]);
        
      else
        alert("Errore registrazione non riuscita.\nUnhandled Error");
    },
    (err)=>{},
    ()=>{});
    
      

  }
}

class Testi {
  //input placeholders
  namePlaceholder = ["Indirizzo E-Mail", "E-Mail Address"];
  passwordPlaceholder = ["Password","Password"];
  
  //form di registrazione place holders
  regNamePh = ["Nome","Name"]
  regSurnamePh = ["Cognome","Surname"]
  regNicknamePh = ["Soprannome/Nickname","Nickname"]
  regShowPrivateNamePh = ["Vuoi permettere agli altri utenti di vedere il tuo nome e cognome?","Would you like other people to know your personal name and surname ?"]
  regEmailPh = ["Email per la registrazione","Sign Up Email"]
  
  //form di registrazione pulsanti
  btnRegistrati = ["Conferma Registrazione","Confirm and Sign Up"];
  sonoRegistrato = ["Sei già registrato?","Already Signed Up?"];
  btnClearRegistrazione = ["Ripulisci campi","Reset Fielsd"];

  //conferma registrazione utente
  confirmRegistration = ["Sei sicuro di voler confermare la registrazione?","Continue with the Sign Up?"];

  //messagi per utente
  messaggioEmailEsistente = ["Impossibile completare la registrazione, l'email inserita è già stata utilizzata.","Can not Sign Up, the Email already exists."];
  signupSuccess = ["La registrazione è avvenuta correttamente.","Sign Up request was succesfull."];
  signupError = ["",""];
  confirmReset = ["Sicuro di voler cancellare i valori inseriti?","Do you really intend to clear the registration fields?"];

  //accesso non riuscito
  accessoNegato = ["Email o Password non valida.","Email or Password are incorrect."]

  accedi = ["Accedi","Login"];
  registrati = ["Non ti sei ancora registrato?","Not yet Signed Up?"];

  //login fallito
  emailOkPassNo = ["La password inserita non corrisponde all'email selezionata.","Password incorrect.\nThe Password does not match the email inserted."];
  emailNonTrovata = ["L'email inserita non è mai stata registrata.","The email inserted is not been registered yet."];


}

export class InputCredenzialiLogin{
  email: string;
  password: string;
}