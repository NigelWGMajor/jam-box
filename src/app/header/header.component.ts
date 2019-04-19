import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

   user: string= 'Visitor';
   playerMessage: string ;
  ngOnInit() {
    this.playerMessage = 'You are not logged in as a player:  you may browse as a visitor!';
  }

}
