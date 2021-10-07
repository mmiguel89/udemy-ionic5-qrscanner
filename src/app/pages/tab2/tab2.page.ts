import { Component } from '@angular/core';
import { Router } from '@angular/router';

//import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { File } from '@ionic-native/file/ngx';

import { DataLocalService } from '../../services/data-local.service';
import { Record, TYPES } from '../../models/record.model'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  url: string = '';

  constructor(
    public dataLocalService: DataLocalService,
    //private emailComposer: EmailComposer,
    private inAppBrowser: InAppBrowser,
    private file: File,
    private router: Router
  ) { }

  async send() {
    // Prepare csv text
    let text = "type,format,created,text\n"
    this.dataLocalService.records.forEach(record => {
      text += `${record.type},${record.format},${record.created},${record.text.replace(",", " ")}\n`
    });
    // Write in a file
    await this.file.createFile(this.file.dataDirectory, "records.csv", true);
    await this.file.writeExistingFile(this.file.dataDirectory, "records.csv", text);
    // Send by email - TODO: Plugin not working!!! Showing just the url on local var!!!
    // const email = {
    //   to: 'mmiguel89@gmail.com',
    //   attachments: [
    //     `${this.file.dataDirectory}records.csv`
    //   ],
    //   subject: 'QRCode',
    //   body: 'QRCode',
    //   isHtml: true
    // };
    // this.emailComposer.open(email);
    this.url = `${this.file.dataDirectory}records.csv`;
  }

  open(record: Record) {
    const type = record.type;
    switch (type) {
      case TYPES.http: {
        this.inAppBrowser.create(record.text, '_system');
        break;
      };
      case TYPES.geo: {
        this.router.navigate([`tabs/map/${record.text}`]);
        break;
      };
      default: {
        alert("WTF");
      }
    };
  }
}
