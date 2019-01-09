import { Component, OnInit } from '@angular/core';
import { GlobalRuntimeConfigService } from '../../services/global-runtime-config.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-login-info-for-menu',
  templateUrl: './login-info-for-menu.component.html',
  styleUrls: ['./login-info-for-menu.component.css']
})
export class LoginInfoForMenuComponent implements OnInit {

  showLoginRegisterForm: boolean = false;
  txt = new Testi();
  rtmSvc : GlobalRuntimeConfigService;

  constructor(_globalRuntimeService :GlobalRuntimeConfigService) {
    this.rtmSvc = _globalRuntimeService;
  }

  ngOnInit() {
  }

  toggle(){
    this.rtmSvc.config.user.isLogged = !this.rtmSvc.config.user.isLogged; 
  }

  ShowLoginRegisterForm(){
    this.rtmSvc.config.login.showLoginForm = true;
  }

}

class Testi {
  login = ["Accedi", "Login"];
  register = ["Registrati","Register"];
}




