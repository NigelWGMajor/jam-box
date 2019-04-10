import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

   user: string= 'Visitor';
   playerMessage: string = 'In order to make changes you must log in.  You are welcome to browse as a visitor.';;
  ngOnInit() {
    this.playerMessage = 'In order to make changes you must log in.  You are welcome to browse as a visitor.';
  }

}
