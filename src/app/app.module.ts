import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [
    AppRoutingModule,
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot()
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
    BarcodeScanner,
    InAppBrowser
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
