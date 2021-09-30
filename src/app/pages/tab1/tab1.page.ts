import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

import { DataLocalService } from '../../services/data-local.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  txt: string = "";

  constructor(
    private barcodeScanner: BarcodeScanner,
    private dataLocalService: DataLocalService,
    private router: Router
  ) { }

  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      if (!barcodeData.cancelled)
        this.saveAndOpenHistory(barcodeData.format, barcodeData.text);
    }).catch(err => {
        this.saveAndOpenHistory("QRCode", "https://ionicframework.com/docs/native/barcode-scanner");
    });
  }

  async saveAndOpenHistory(format: string, text: string) {
    await this.dataLocalService.save(format, text);
    this.router.navigate(['tabs/tab2']);
  }
}