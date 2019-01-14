import { Component, OnInit } from '@angular/core';
import { GlobalRuntimeConfigService } from '../../services/global-runtime-config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pathBackground : string;
  txt = new Testi();
  rtmSvc : GlobalRuntimeConfigService;

  constructor(_globalRuntimeService :GlobalRuntimeConfigService) {
    this.rtmSvc = _globalRuntimeService;

  }

  ngOnInit() {
    this.pathBackground = `../../../assets/media/home/home${Math.floor(Math.random() * 4) + 1  }.jpg`;
  }

}

class Testi {
  titolo = ["Too Ez Fish", "Too Ez Fish"];
  descrizione = ["Il Nuovo Portale Italiano dedicato alla Pesca Sportiva.","The new Italian Fishing Reference."];

}