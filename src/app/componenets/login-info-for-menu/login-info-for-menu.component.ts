import { Component, OnInit } from '@angular/core';
import { GlobalRuntimeConfigService, User } from '../../services/global-runtime-config.service';
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

  ShowLoginRegisterForm(){
    this.rtmSvc.config.login.showLoginForm = true;
  }

  logout(){
    if (confirm(this.txt.logoutConfirm[this.rtmSvc.config.lang]))
      this.rtmSvc.config.user = new User();
  }

}

class Testi {
  login = ["Accedi", "Login"];
  register = ["Registrati","Sign Up"];
  logout = ["Disconnetti","Logout"];
  logoutConfirm = ["Sei sicuro di volerti scollegare?","Do you really want to logout?"];
}




