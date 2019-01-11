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
  nuovoUtente = new UserForDotnet();

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




   /*return values is encoded in the user basicId
    basicId = >= 0 | OK
    basicId = > -1 | Email non registrata
    basicId = > -2 | Email trovata ma password sbagliata
  */
  accedi(_credenziali: InputCredenzialiLogin){

    this.api.login(_credenziali).subscribe((success)=>{
      
      let user : User = success;

      if ( user.basicId >= 0 ){
        this.rtmSvc.config.user = user;
        this.rtmSvc.config.user.isLogged = true;
        console.log(this.rtmSvc.config.user);
        
        this.closeForm();
      }
      //email trovata, password sbagliata
      else if (user.basicId == -2)
        alert(this.txt.emailOkPassNo[this.rtmSvc.config.lang]);
      //email non trovata
      else if (user.basicId == -1)  
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






  /* 
  From the api
  return  1 | registrazione ok
  return -1 | email gia esistente
  return -2 | nickname gia esistente
  return -3 | errore salvataggio credenziale email e password
  return -4 | errore salvataggio info
  */
  confermaRegistrazione(){
    confirm(this.txt.confirmRegistration[this.rtmSvc.config.lang]);

    this.api.addNewPerson(this.nuovoUtente).subscribe((success)=>{

      if ( success == 1)
        alert(this.txt.signupSuccess[this.rtmSvc.config.lang]);  
      else if ( success == -1)
        alert(this.txt.messaggioEmailEsistente[this.rtmSvc.config.lang]);  
      else if ( success == -2)
        alert(this.txt.messaggioNicknameEsistente[this.rtmSvc.config.lang]);
      else if ( success == -3)
        alert(this.txt.messaggioErroreBasic[this.rtmSvc.config.lang]);
      else if ( success == -4)
        alert(this.txt.messaggioErroreInfo[this.rtmSvc.config.lang]);

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
  messaggioNicknameEsistente = ["Impossibile completare la registrazione, il nickname inserita è già stato utilizzato.","Can not Sign Up, the Nickname already exists."];
  messaggioErroreBasic = ["Impossibile completare la registrazione dati base con queste credenziali.\nContattare l'amministratore dalla pagina Contatti.","Can not Sign Up the basic, using those credentials.\nPlease get in touch from the Contact form."];
  messaggioErroreInfo = ["Impossibile completare la registrazione dati info con queste credenziali.\nContattare l'amministratore dalla pagina Contatti.","Can not Sign Up the info, using those credentials.\nPlease get in touch from the Contact form."];

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

export class UserForDotnet {
  showPrivateName: boolean = false;
  name: string = "";
  surname: string = ""; 
  nickname: string = "";
  email: string = "";
  password: string = "";
}