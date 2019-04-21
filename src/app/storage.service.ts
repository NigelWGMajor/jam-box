import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { sqlite3 } from 'sqlite3';

import { IUser } from './models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService implements OnInit, OnDestroy {

  private readonly db: any;

  constructor() {
  }
  // lifecycle:
  ngOnInit() {
    // for an in-memory database we would use sqlite3.database(':memory:')
    const db = sqlite3.database('./db/jambox.db', [sqlite3.OPEN_READWRITE, sqlite3.OPEN_CREATE], (err: { message: any; }) => {
      if (err) {
        console.error(err.message);
      }
      console.log('Database connected.');
    });
  }

  ngOnDestroy() {
    this.db.close((err) => {
      if (err) {
        console.error(err.message);
      }
      console.log('Database closed.');
    });
  }
  // sample data access:
  // db.all() // when zero to many rows are expected
  // db.each() // iterates through the rows
  // db.get() // when zero or one result is expected

  getAllUsers(): any {
    const params: any = null;
    const sql = 'select Id, Name, Description, Key, TrustLevel, DisplayName from players  where disabled <> true order by Id';
    this.db.all(sql, params, (err, rows) => {
      if (err) {
        return console.error(err.message);
      }
      const data: IUser[] = [];
      rows.forEach((row) => {
        data.push(row);
      });
      return data;
    });
  }

  // getOne(params) {
  //   const sql = 'something return zero to one row';
  //   this.db.get(sql, params, (err, row) => {
  //     if (err) {
  //       return console.error(err.message);
  //     }
  //     // process row here!
  //     console.log(row);
  //   });
  // }

  // getEach(params) {
  //   const sql = 'something returning zero or more rows iteravely';
  //   this.db.each(sql, params, (err, row) => {
  //     if (err) {
  //       return console.error(err.message);
  //     }
  //     // called once for each row:
  //     console.log(row);
  //   });
  // }
}
