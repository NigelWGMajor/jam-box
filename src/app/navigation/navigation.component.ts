import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  public user: string;
  public playerMessage: string;

  constructor() { }

  ngOnInit() {
    this.user = 'Visitor';
    this.playerMessage = 'In order to make changes you must log in.  You are welcome to browse as a visitor.';
  }
}
