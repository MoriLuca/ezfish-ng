import {
  Injectable
} from '@angular/core';
import { config } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalRuntimeConfigService {

  config = new GlobalRuntimeConfig();

  constructor() {}

  setLang(langIndex:number) {
    if (langIndex >= 0 && langIndex < 3){
      this.config.lang = langIndex;
    }
    else{
      //In caso di errore, setto la lingua ancora in italiano
      langIndex = 0;
    }
  }

  getConfig(): GlobalRuntimeConfig{
    return this.config;
  }
}


export class GlobalRuntimeConfig {
  lang = 0;
}
