import { Component, OnInit } from '@angular/core';
import { GlobalRuntimeConfigService } from 'src/app/services/global-runtime-config.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-get-info-by-email',
  templateUrl: './get-info-by-email.component.html',
  styleUrls: ['./get-info-by-email.component.css']
})
export class GetInfoByEmailComponent implements OnInit {

  emailMessage: EMailMessage = new EMailMessage("","","","","");
  txt = new Testi();

  //services
  rtmSvc : GlobalRuntimeConfigService;
  api : ApiService

  constructor(_globalRuntimeService :GlobalRuntimeConfigService, _api: ApiService) {
    this.rtmSvc = _globalRuntimeService;
    this.api = _api;
  }

  ngOnInit() {
  }

  inviaEmail(){
    if(!this.emailMessage.fromEmail.includes("@") || !this.emailMessage.fromEmail.includes(".")){
      alert(this.txt.emailNonValida[this.rtmSvc.config.lang]);
      return;
    }
    this.api.SendEmailForInfo(this.emailMessage).subscribe((success)=>{

      if ( success == 1)
        alert(this.txt.messaggioInviato[this.rtmSvc.config.lang]);
      else 
        alert(this.txt.messaggioNonInviato[this.rtmSvc.config.lang]);

    },
    (err)=>{alert(this.txt.messaggioNonInviato[this.rtmSvc.config.lang]);},
    ()=>{});
  }
}
  export class EMailMessage {
  constructor(
    public fromEmail: string,
    public to: string,
    public fromTelephone: string,
    public subject: string,
    public body: string
  ){
    this.to = "mori.luca@hotmail.it"
  }
  
}

class Testi {
  //input placeholders
  namePlaceholder = ["Indirizzo E-Mail", "E-Mail Address"];
  passwordPlaceholder = ["Password","Password"];
  emailNonValida = ["L'email deve contenere i caratteri '@' , '.' ed essere lunga almeno 5 caratteri.","Your Email must contain '@' , '.' and be long at least 5 characters."]

  messaggioInviato = ["Il messaggio è stato inviato correttamente","Your message has been sent."]
  messaggioNonInviato = ["Impossibile inviare il messaggio.","Sorry, we are unable to send your message at the moment."]
}
