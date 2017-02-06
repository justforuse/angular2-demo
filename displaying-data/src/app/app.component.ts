import { Component } from '@angular/core';
// './' is required
import { Hero } from './hero'
@Component({
  selector: 'my-app',
  // path should be relative to the element
  templateUrl: "./app/app.template.html"
  // template: `
  //   <h1>{{title}}</h1>
  //   <h2>My hero is {{myHero}}</h2>
  // `,
})
export class AppComponent {
  title: string;
  heroes: Hero[];
  myHero: Hero;

  constructor() {
    this.title = 'Hero list';
    this.heroes = [
      new Hero(1, "allen"),
      new Hero(2, "bob"),
      new Hero(3, "curry"),
      new Hero(4, "david"),
    ]
    this.myHero = this.heroes[0];
  }


}
