import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { mariadb } from 'mariadb';

const mariadb = require('mariadb');

/*
async function asyncFunction() {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT 1 as val");
    console.log(rows); //[ {val: 1}, meta: ... ]
    const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
    console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
  } catch (err) {
    throw err;
  } finally {
    if (conn) return conn.end();
  }
}
*/

import { IUser } from './models/user.interface';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Observable } from 'rxjs';
import { async } from 'rxjs/internal/scheduler/async';

@Injectable({
  providedIn: 'root'
})
export class StorageService implements OnInit, OnDestroy {
  constructor() { }

  async xeqLogOn (userName: string, password: string) {
      let conn;
      try {
        conn = await this.pool.getConnection();
        const rows = await conn.query("SELECT * FROM PLAYERS WHERE NAME= '" + userName + "AND KEY+'" + password);
        console.log(rows); //[ {val: 1}, meta: ... ]
      } catch (err) {
        throw err;
      } finally {
        if (conn) return conn.end();
      }
    }

  logOn(payload: any): any {
    return this.xeqLogOn(payload.name, payload.password);
  }

  getAllUsers() {
    return new Observable<IUser>();
  };

  // lifecycle:
  ngOnInit() {
    const pool = mariadb.createPool({
      host: 'mariaDB',
      user: 'root',
      password: 'N1xR00T',
      connectionLimit: 5
    });
  }

  ngOnDestroy() {
  }
}
