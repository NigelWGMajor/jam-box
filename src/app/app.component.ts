import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@NgModule({
  imports: [
    FormsModule
  ]
})
export class AppComponent {
  title = 'jam-box';
}
