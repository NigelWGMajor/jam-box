import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
   heading: string = 'Contacts Test Page';
  constructor() { }

  ngOnInit() {
  }

}
