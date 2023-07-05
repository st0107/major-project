import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'major-project';
  currentNavigated = 'Recipe';
  pageChange(newPage: string) {
    this.currentNavigated = newPage
  }

}
