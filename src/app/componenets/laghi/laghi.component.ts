import { Component, OnInit } from '@angular/core';
import { GlobalRuntimeConfigService } from 'src/app/services/global-runtime-config.service';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-laghi',
  templateUrl: './laghi.component.html',
  styleUrls: ['./laghi.component.css']
})

export class LaghiComponent implements OnInit {

  //services
  rtmSvc : GlobalRuntimeConfigService;
  api : ApiService;
  laghi: LakePreview[] = []; 

  constructor( _globalRuntimeService :GlobalRuntimeConfigService, _api: ApiService) {
    this.rtmSvc = _globalRuntimeService;
    this.api = _api;
  }

  ngOnInit() {
    this.getLakesPreview();
  }

  routeToLake(){
  }

  getLakesPreview(){
    this.api.getLakesPreviews().subscribe((res) =>{
      this.laghi = res;
    },
    (err)=>{console.log("error");
    },
    ()=>{});
  }

  //ritorna il nome della classe da utilizzare per la colorazione del giono
  getOpeningInfo(dayOffset:number): string{
    if (dayOffset == 0) return "not-open";
    if (dayOffset == 1) return "half";
    return "open";
  }

}

export class LakePreview{
  
  constructor(id:number,
              giornoDiApertura: number[],
              nome: string,
              indirizzo: string,
              telefono: string,
              email: string,
              info: string[],
              prewievImg: string){
    
  }
}