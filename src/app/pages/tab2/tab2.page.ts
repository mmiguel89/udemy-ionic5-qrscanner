import { Component } from '@angular/core';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { DataLocalService } from '../../services/data-local.service';
import { Record, TYPES } from '../../models/record.model'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    public dataLocalService: DataLocalService,
    private inAppBrowser: InAppBrowser
  ) { }

  send() {
    console.log("Enviando registro por correo");
  }

  open(record: Record) {
    const type = record.type;
    switch (type) {
      case TYPES.http: {
        this.inAppBrowser.create(record.text, '_system');    
        break;
      };
      case TYPES.geo: {
        alert("GEO");
        break;
      };
      default: {
        alert("WTF");
      }
    };

    
  }
}
