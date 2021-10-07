import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

import { Record } from '../models/record.model'

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  _storage: Storage;

  records: Record[] = [];

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    this._storage = await this.storage.create();
    const records = await this._storage.get("records");
    this.records = records ? records : [];
  }

  async save(format: string, text: string) {
    const record: Record = new Record(format, text);
    this.records.unshift(record);
    await this._storage.set("records", this.records);
  }
}
