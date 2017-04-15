import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  hero: Hero = {
    id: 1,
    name: "WindStorm"
  }
}

export class Hero {
  id: number;
  name: string;
}