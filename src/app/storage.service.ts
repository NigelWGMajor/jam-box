import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { mariadb } from 'mariadb';
/*
const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: 'mydb.com',
     user:'myUser',
     password: 'myPassword',
     connectionLimit: 5
});
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

@Injectable({
  providedIn: 'root'
})
export class StorageService implements OnInit, OnDestroy {
  logOn(payload: any): any {
    throw new Error('Method not implemented.');
  }
  getAllUsers() {
    return new Observable<IUser>();
  }



  constructor() {
  }
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
    // this.db.close((err) => {
    //   if (err) {
    //     console.error(err.message);
    //   }
    //   console.log('Database closed.');
  }
}
