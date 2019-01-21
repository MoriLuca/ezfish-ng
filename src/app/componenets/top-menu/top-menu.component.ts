import { Component, OnInit } from '@angular/core';
import { GlobalRuntimeConfigService } from '../../services/global-runtime-config.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  txt = new Testi();
  rtmSvc : GlobalRuntimeConfigService;

  constructor(_globalRuntimeService :GlobalRuntimeConfigService) {
    this.rtmSvc = _globalRuntimeService;
  }

  ngOnInit() {
  }

  changeLang(index:number){
    this.rtmSvc.setLang(index);
  }

}

class Testi {
  pulsanteRicerca = ["Ricerca Laghetto", "Find Lake"];
  placeHolderRicerca = ["Nome Laghetto","Pound Name"];

  laghi = ["Laghi","Lakes"];
  tecniche = ["Tecniche","Techniques"];
  squadre = ["Squadre","Teams"];
  specieIttiche = ["Specie Ittiche","Fish Species"];
  contattaci = ["Contattaci","Contact Us"];

}